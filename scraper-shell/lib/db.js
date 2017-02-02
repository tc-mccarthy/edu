var request = require("request"),
    async = require("async"),
    moment = require("moment"),
    util = require("util"),
    _ = require("lodash"),
    config = require(__dirname + "/../config.js"),
    mysql = require("mysql"),
    dbCluster = mysql.createPoolCluster({
        restoreNodeTimeout: 1000
    });

dbCluster.add('MASTER', config.mysql.master);

//if slaves have been defined, add them to the dbCluster pool
if (typeof config.mysql.slaves !== "undefined" && config.mysql.slaves.constructor === Array && config.mysql.slaves.length > 0) {
    _.each(config.mysql.slaves, function(slave, key) {
        var key = key + 1;

        dbCluster.add("SLAVE" + key, slave);
    });
}


var RawQuery = function(str) {
    var _this = this;
    this.value = str;

    this.getValue = function() {
        return _this.value;
    }
};

var database = {
    tables: {
        scrape: "data",
    },

    slugify: function(str) {
        var slug = str.trim().replace(/[^A-Za-z0-9]+/g, "-").toLowerCase();

        return slug;
    },

    columnize: function(cols) {
        var c = [];

        _.each(cols, function(col) {
            if (typeof col === "string") {
                if (col === "*") {
                    c.push(util.format("%s", col));
                } else {
                    c.push(util.format("`%s`", col));
                }
            } else if (col instanceof RawQuery) {
                c.push(col.getValue());
            }
        });

        return c;
    },

    raw: function(str) {
        return new RawQuery(str);
    },

    log: function(query, conn, err) {
        if (config.mysql.logging) {
            var log = {
                instance: conn._clusterId,
                query: query,
                err: false
            };

            if (err) {
                log[err] = err;
            }

            console.log(log);
        }
    },

    get: function(options, cb) {
        var _this = this;

        // adjust for no where property
        if (typeof options.where === "undefined") {
            options.where = []
        }

        // adjust for no group property
        if (typeof options.group === "undefined") {
            options.group = []
        }

        // adjust for no order property
        if (typeof options.order === "undefined") {
            options.order = []
        }

        // begin the query
        var sql = [
            "SELECT %s",
            "FROM %s"
        ];

        // begin where clause, if defined
        if (options.where.length > 0) {
            _.each(options.where, function(clause, key) {
                var statement = "WHERE";
                if (key > 0) {
                    statement = "AND"
                }

                sql.push(util.format("%s %s %s '%s'", statement, clause.col, clause.op, _this.addslashes(clause.val)));
            });
        }

        // begin group clause, if defined
        if (options.group.length > 0) {
            sql.push("GROUP BY " + options.group.join(", "));
        }

        // begin order clause, if defined
        if (options.order.length > 0) {
            var order = [];

            _.each(options.order, function(clause, key) {
                order.push(util.format("%s %s", clause.col, clause.sort));
            });

            sql.push("ORDER BY " + order.join(", "));
        }

        // begin limit clause, if defined
        if (typeof options.limit !== "undefined" && options.limit) {
            sql.push(util.format("LIMIT %s", options.limit));
        }

        // begin offset clause, if defined
        if (typeof options.offset !== "undefined" && options.offset) {
            sql.push(util.format("OFFSET %s", options.offset));
        }

        sql = util.format(sql.join(" "), _this.columnize(options.columns).join(", "), options.table);

        this.query(sql, cb);
    },

    upsert: function(options, cb) {
        var cols = Object.keys(options.data),
            cols_formatted = this.columnize(cols),
            _this = this,
            vals = [],
            update = [],
            sql = [
                "INSERT INTO %s (%s)",
                "VALUES(%s)",
                "ON DUPLICATE KEY UPDATE %s"
            ];

        _.each(cols, function(col, key) {
            vals.push(util.format("'%s'", _this.addslashes(options.data[col])));
            update.push(util.format("%s=VALUES(%s)", cols_formatted[key], col));
        });

        sql = util.format(sql.join(" "), options.table, cols_formatted, vals.join(", "), update.join(", "));

        this.query(sql, cb)
    },

    insert: function(options, cb) {
        var cols = Object.keys(options.data),
            cols_formatted = this.columnize(cols),
            _this = this,
            vals = [],
            sql = [
                "INSERT INTO %s (%s)",
                "VALUES(%s)"
            ];

        _.each(cols, function(col, key) {
            vals.push(util.format("'%s'", _this.addslashes(options.data[col])));
        });

        sql = util.format(sql.join(" "), options.table, cols_formatted, vals.join(", "));

        this.query(sql, cb);
    },

    update: function(options, cb) {
        var cols = Object.keys(options.data),
            cols_formatted = this.columnize(cols),
            _this = this,
            vals = [],
            where = [],
            sql = [
                "UPDATE %s",
                "SET %s",
                "WHERE %s"
            ].join(" ");

        _.each(cols, function(col, key) {
            vals.push(util.format("%s = '%s'", cols_formatted[key], _this.addslashes(options.data[col])));
        });

        // begin where clause, if defined
        if (options.where.length > 0) {
            _.each(options.where, function(clause, key) {
                var statement = "WHERE";
                if (key > 0) {
                    statement = "AND"
                }

                where.push(util.format("%s %s %s '%s'", statement, clause.col, clause.op, _this.addslashes(clause.val)));
            });

            sql = util.format(sql, options.table, vals.join(", "), where.join(" "));

            this.query(sql, cb);
        } else {
            cb([{
                error: true,
                message: "WHERE clause is required"
            }]);
        }
    },

    //this query wrapper is designed to be used for all queries, including the methods above.  It handles read replica operations and should be leveraged for optimal application performance
    query: function(query, cb) {
        var _this = this,
            nonmaster = query.toLowerCase().match(/^(show)|(select)/), //regex is used to figure out if this query is a read-only query
            connectionProcess = function(err, conn) {
                if (err) {
                    console.log(err);
                } else {
                    conn.query(query, function(err, rows, fields) {
                        _this.log(query, conn, err);
                        cb(rows);
                    });
                }

                conn.release();
            }

        //non read-only queries are sent to the master
        if (!nonmaster) {
            dbCluster.getConnection('MASTER', connectionProcess);
        }

        //read-only queries are routed betwixt master and slaves via round-robin
        else {
            dbCluster.getConnection(connectionProcess);
        }
    },

    queryStream: function(query, cb) {
        /*note, CB is an object of methods for each event. Each method should check for a defined callback
            EX
            cb = {
                error: function(err, cb){
                    //do the stuff

                    if(typeof cb === "function"){
                        cb();
                    }
                },
                fields: function(fields, cb){
                    //do the stuff

                    if(typeof cb === "function"){
                        cb();
                    }
                },
                row: function(row, cb){
                    //do the stuff

                    if(typeof cb === "function"){
                        cb();
                    }
                },
                done: function(cb){
                    //do the stuff

                    if(typeof cb === "function"){
                        cb();
                    }
                }
            }
        */

        var _this = this,
            nonmaster = query.toLowerCase().match(/^(show)|(select)/), //regex is used to figure out if this query is a read-only query
            connectionProcess = function(err, conn) {
                if (err) {
                    console.log(err);
                } else {
                    conn.query(query).on('error', function(err) {
                            cb.error(err);
                        })
                        .on('fields', function(fields) {
                            cb.fields(fields);
                        })
                        .on('result', function(row) {
                            // Pausing the connnection is useful if your processing involves I/O
                            conn.pause();

                            cb.row(row, function() {
                                conn.resume();
                            });
                        })
                        .on('end', function() {
                            cb.done();
                        });
                }

                conn.release();
            }

        //non read-only queries are sent to the master
        if (!nonmaster) {
            dbCluster.getConnection('MASTER', connectionProcess);
        }

        //read-only queries are routed betwixt master and slaves via round-robin
        else {
            dbCluster.getConnection(connectionProcess);
        }
    },

    addslashes: function(str) {
        return (str + '').replace(/([\\"\\'])/g, '\\$1').replace(/\u0000/g, '\\0');
    }
};

exports.db = database;
