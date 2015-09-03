exports.config = {
	mysql: {
		user: process.env.MYSQL_USER,
		pass: process.env.MYSQL_PASS,
		db: "SCHEMA NAME",
		host: process.env.MYSQL_HOST,
		port: 3306
	},

	app: {
		port: 9000,
		//home: "/admin/valedictorians/",
		home: "/",
		logging: true
	}
};