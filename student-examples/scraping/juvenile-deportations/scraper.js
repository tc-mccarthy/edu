var util = require("util"),
	async = require("async"),
	config = require(__dirname + "/config.js"),
	request = require("request"),
	_ = require("lodash"),
	cheerio = require("cheerio"),
	models = require(__dirname + "/models/index.js").models.autoLoad(),
	Base = require(__dirname + "/models/base.js").Base;


/* BEGIN SCRAPER HERE */
//this is a list of all of the states in the system
var states = ["AZ", "CA", "CO", "CT", "FL", "GA", "HI", "IL", "LA", "MD", "MA", "MI", "MN", "MO", "NE", "NV", "NJ", "NY", "NC", "OH", "OR", "PA", "PR", "TN", "TX", "UT", "VA", "WA"];
var years = [];


//builds an array of all of the years
for (var i = 2005; i <= 2017; i++) {
	years.push(i);
}



async.eachSeries(years, function (year, nextYear) {

	//loops through and fires for each year
	async.eachSeries(states, function (state, nextState) {
		//fires on each state

		// BUILD THE REPRESENTED DIMENSION
		var url = util.format("http://trac.syr.edu/phptools/immigration/juvenile/table.php?stat=cls&fy=%s&state=%s&dimension=represented&sort=keyasc", year, state);
		var represented = new Base("represented");

		//get the HTML
		request(url, function (err, resp, body) {
			var $ = cheerio.load(body);

			//load the needed data into an object that looks like my table
			var data = {
				year: year,
				state: state,
				represented: parseFloat($("table").find("tbody").find("tr").eq(2).find("td").eq(1).text().replace(/\,/g, '')),
				not_represented: parseFloat($("table").find("tbody").find("tr").eq(1).find("td").eq(1).text().replace(/\,/g, ''))
			};

			//insert the data into the table
			represented.create(data, function (row, err) {
				if (err) {
					console.log(err);
				}
				nextState();
				console.log(data);
			});

		});
	}, function (err) {
		//fires after final state is complete
		nextYear(); //moves on to the next year
	});

}, function (err) {
	console.log("Done!");
});
