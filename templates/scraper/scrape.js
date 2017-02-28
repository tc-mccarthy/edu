var util = require("util"),
    async = require("async"),
    config = require(__dirname + "/config.js"),
    _ = require("lodash"),
    cheerio = require("cheerio"),
    models = require(__dirname + "/models/index.js").models.autoLoad();


/* BEGIN SCRAPER HERE */
