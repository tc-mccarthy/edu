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
		opts = Object.assign({ method: "GET", headers: { "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.81 Safari/537.36" } }, opts);

		return new Promise((resolve, reject) => {
			request(opts, (err, response, body) => {
				if (err) {
					reject(err);
				} else {
					const $ = cheerio.load(body);
					const data = { $: $, body: body, response: response };
					resolve(data);
				}
			});
		});
	}
};

module.exports = lib;