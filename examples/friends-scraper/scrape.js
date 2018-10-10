const _ = require("lodash"),
	async = require("async"),
		config = require(__dirname + "/config.js"),
		models = require(__dirname + "/models/index.js").models.autoLoad(),
		lib = require(__dirname + "/lib/scraperLib.js");


/* BEGIN SCRAPER HERE */
const url = "https://en.wikipedia.org/wiki/Friends";

/**
 * Leverages the get method from the scraperLib.
 * The get method returns a Promise allowing for a semantically sensical approach for asynchronous logic.
 */
lib.get(url).then((data) => {
	/** Fancy notation for extracting certain object properties as standalone variables */
	const { $, body, response } = data;
	const cast = [];

	$("#Cast_and_characters").closest("h2").nextAll("ul").eq(0).find("li").each(function () {
		const $this_friend = $(this),
			castmember_name = $this_friend.find("a").eq(0).text(),
			character_name = $this_friend.find("a").eq(1).text();

		const char_obj = {
			castmember: castmember_name,
			character: character_name
		};

		cast.push(char_obj);
	});

	console.log(cast);
}).catch((err) => {
	/** This is where errors go -- if the get(url) method has an error, it will be handled here */
	console.log(err);
	process.exit();
});