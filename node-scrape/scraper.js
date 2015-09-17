/* My first scraper
* Author: TC McCarthy
* Date: 9/3/15
*/


var cheerio = require("cheerio"),
	request = require("request"),
	sequelize = require("sequelize"),
	config = require("./config.js"),

	//connect to the DB
	db = new sequelize(config.mysql.db, config.mysql.user, config.mysql.pass, {host: config.mysql.host, port: config.mysql.port, logging: true}),

//set the URL of the page I want to scrape
var url = "https://en.wikipedia.org/wiki/New_York_Jets";

//
request(url, function(err, response, body){
	if(err) throw err;

	$ = cheerio.load(body);

	var title = $("#firstHeading").text();

	console.log(title);
});