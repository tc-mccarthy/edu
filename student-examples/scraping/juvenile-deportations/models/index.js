/* LINKS CONTROLLERS TO ROUTES FOR FULL MVC STRUCTURE */
var _ = require("lodash"),
	models = {
		list: {
			scrape: __dirname + "/scrape.js"
		},
		autoLoad: function () {
			var _this = this,
				models = Object.keys(_this.list),
				list = {};

			_.each(models, function (name) {
				list[name] = require(_this.list[name]).model;
			});

			return list;
		},

		loadForModel: function (model) {
			var _this = this,
				models = Object.keys(_this.list),
				list = {};

			_.each(models, function (name) {
				if (name !== model) {
					list[name] = require(_this.list[name]).model;
				}
			});

			return list;
		}
	};

exports.models = models;
