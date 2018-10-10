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

	/** Start an empty array to store each character's object */
	const cast = [];

	/**
	 * Finds the element on the page for cast and characters, grabs the parent h2, then the sibling uls, takes just the first one, and iterates
	 * through its list elements.
	 */
	$("#Cast_and_characters").closest("h2").nextAll("ul").eq(0).find("li").each(function () {
		/**
		 * For each one, we capture the castmember's name from the first a tag and their character's name from the second.
		 */
		const $this_friend = $(this),
			castmember_name = $this_friend.find("a").eq(0).text(),
			character_name = $this_friend.find("a").eq(1).text();

		/**
		 * We then create a standard object with a castmember property set to castmember_name
		 * and a character property set to character name
		 */
		const char_obj = {
			castmember: castmember_name,
			character: character_name
		};

		/**
		 * We then add the character object to the cast list
		 */
		cast.push(char_obj);
	});

	/**
	 * Console.log the cast list to the terminal
	 */
	console.log(cast);
}).catch((err) => {
	/** This is where errors go -- if the get(url) method has an error, it will be handled here */
	console.log(err);
	process.exit();
});