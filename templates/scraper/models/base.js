var request = require("request"),
	async = require("async"),
		moment = require("moment"),
		util = require("util"),
		_ = require("lodash"),

		config = require(__dirname + "/../config.js").config,
		db = require(__dirname + "/../lib/db.js").db;

var Base = function (table) {
	this.table = table;

	this.find = function (x) {
		return new Promise((resolve, reject) => {
			const _this = this,
				data = {
					table: _this.table,
					where: x.where,
					columns: x.columns,
					limit: 1
				};

			db.get(data, (results, err) => {
				if (!err) {
					resolve(results[0]);
				} else {
					reject(err);
				}
			});
		});
	};

	this.findAll = function (x) {
		return new Promise((resolve, reject) => {
			const _this = this,
				data = {
					table: _this.table,
					where: x.where,
					columns: x.columns,
				};

			db.get(data, (results, err) => {
				if (!err) {
					resolve(results);
				} else {
					reject(err);
				}
			});
		});
	};

	this.create = function (x, cb) {
		return new Promise((resolve, reject) => {
			const errors = [],
				success = [];
			if (!(x instanceof Array)) {
				x = [x];
			}

			async.eachSeries(x, (row, nextRow) => {
				const _this = this,
					data = {
						table: _this.table,
						data: row
					};

				db.insert(data, (res, err) => {
					if (err) {
						errors.push({ row: data, error: err });
					} else {
						success.push({ row: data });
					}

					nextRow();
				});
			}, (err) => {
				if (success.length == 0) {
					reject({ success: success, error: err });
				} else {
					resolve({ success: success, error: err });
				}
			});
		});
	};

	this.upsert = function (x, cb) {
		return new Promise((resolve, reject) => {
			const errors = [],
				success = [];
			if (!(x instanceof Array)) {
				x = [x];
			}

			async.eachSeries(x, (row, nextRow) => {
				const _this = this,
					data = {
						table: _this.table,
						data: row
					};

				db.upsert(data, (res, err) => {
					if (err) {
						errors.push({ row: data, error: err });
					} else {
						success.push({ row: data });
					}

					nextRow();
				});
			}, (err) => {
				if (success.length == 0) {
					reject({ success: success, error: error });
				} else {
					resolve({ success: success, error: error });
				}
			});
		});
	};

	this.update = function (x, cb) {
		return new Promise((resolve, reject) => {
			const errors = [],
				success = [];
			if (!(x instanceof Array)) {
				x = [x];
			}

			async.eachSeries(x, (row, nextRow) => {
				const _this = this,
					data = {
						table: _this.table,
						data: row.data,
						where: row.where
					};

				db.update(data, (res, err) => {
					if (err) {
						errors.push({ row: data, error: err });
					} else {
						success.push({ row: data });
					}

					nextRow();
				});
			}, (err) => {
				if (success.length == 0) {
					reject({ success: success, error: error });
				} else {
					resolve({ success: success, error: error });
				}
			});
		});
	};

	this.delete = function (x, cb) {
		return new Promise((resolve, reject) => {
			const errors = [],
				success = [];
			if (!(x instanceof Array)) {
				x = [x];
			}

			async.eachSeries(x, (id, nextRow) => {
				const _this = this,
					data = {
						table: _this.table,
						data: {
							is_active: 0
						},
						where: {
							id: id
						}
					};

				db.update(data, (res, err) => {
					if (err) {
						errors.push({ row: data, error: err });
					} else {
						success.push({ row: data });
					}

					nextRow();
				});
			}, (err) => {
				if (success.length == 0) {
					reject({ success: success, error: error });
				} else {
					resolve({ success: success, error: error });
				}
			});
		});
	};

	this.findOrCreate = function (where, vals) {
		return new Promise((resolve, reject) => {
			//first check for the record
			this.find({ where: where, columns: ["*"] }).then((results) => {
				if (!!results) {
					return resolve(results);
				} else {
					return this.create(vals);
				}
			}).then((results) => {
				return this.find({
					where: [{
						col: "id",
						op: "=",
						val: results.success[0].data.insertId
            }],
					columns: ["*"]
				});
			}).then((results) => {
				return resolve(results);
			}).catch((err) => {
				return reject(err);
			});
		});
	}
};

exports.Base = Base;