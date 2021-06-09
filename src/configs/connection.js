const mysql = require('mysql2/promise');

const config = {
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    host: process.env.HOSTNAME,
    database: 'siena',
  };
const connection = mysql.createPool(config);

module.exports = connection;