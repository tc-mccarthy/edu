var config = {
	mysql: {
		master: {
			user: process.env.MYSQL_USER,
			password: process.env.MYSQL_PASS,
			database: 'example_schema',
			host: process.env.MYSQL_HOST,
			port: 3306,
			socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
		},
		slaves: [{
			user: process.env.MYSQL_USER,
			password: process.env.MYSQL_PASS,
			database: 'example_schema',
			host: process.env.MYSQL_HOST,
			port: 3306,
			socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
		}],
		logging: true
	}
};

module.exports = config;
