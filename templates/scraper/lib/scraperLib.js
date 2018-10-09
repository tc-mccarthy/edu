const cheerio = require("cheerio"),
	_ = require("lodash"),
	request = require("request");


const lib = {

	/**
	 * GET a page and return its response, body and a cheerio object
	 *
	 * A wrapper on requestJS, this method accepts a URL string or a requestJS option object.
	 * Method gives back a response with error details or an object containing the response object,
	 * body and a cheerio object preloaded with the body contents 
	 *
	 * @param Object|String opts RequestJS compatible object or URL string
	 * @return Promise
	 */
	get: function (opts) {
		if (typeof opts === "string") {
			opts = { url: opts };
		}
		opts = Object.assign({ method: "GET" }, opts);

		return new Promise((resolve, reject) => {
			request(opts, (err, response, body) => {
				if (err) {
					reject(err);
				} else {
					const $ = cheerio.load(body);
					resolve({ $: $, body: body, request: request });
				}
			});
		});
	}
};

module.exports = lib;