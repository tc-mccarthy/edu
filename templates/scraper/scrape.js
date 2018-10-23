const _ = require("lodash"),
	async = require("async"),
		config = require(__dirname + "/config.js"),
		models = require(__dirname + "/models/index.js").models.autoLoad(),
		lib = require(__dirname + "/lib/scraperLib.js"),
		Table = require(__dirname + "/models/base.js").Base;


/* BEGIN SCRAPER HERE */
const url = "https://en.wikipedia.org/wiki/New_York_Jets",
	wiki = new Table("wiki");

/**
 * Leverages the get method from the scraperLib.
 * The get method returns a Promise allowing for a semantically sensical approach for asynchronous logic.
 */
lib.get(url).then((data) => {
	/** Fancy notation for extracting certain object properties as standalone variables */
	const { $, body, response } = data;

	/* Regular ol' jQuery for getting things */
	const page_title = $("h1").text();

	/* Regular ol' console log for checking the work */
	console.log(page_title);

	const test = [
		{ header: "test1" },
		{ header: "test2" },
		{ header: "test3" },
		{ header: "test4" }
	];

	wiki.create(test).then((results) => {
		console.log(results);
	});
}).catch((err) => {
	/** This is where errors go -- if the get(url) method has an error, it will be handled here */
	console.log(err);
	process.exit();
});