var request = require("request"),
	async = require("async"),
	moment = require("moment"),
	util = require("util"),
	_ = require("lodash"),

	config = require(__dirname + "/../config.js").config,
	Base = require(__dirname + "/base.js").Base,
	models = require(__dirname + "/index.js").models.loadForModel("scrape"),
	db = require(__dirname + "/../lib/db.js").db;

var user = new Base("wiki_ex");

exports.model = user;
