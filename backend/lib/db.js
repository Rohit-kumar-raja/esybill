const mysql = require('mysql2/promise');

async function connect() {
  const connection = mysql.createPool({
    namedPlaceholders: true,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD || '',
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
    idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
    queueLimit: 0
  });
  return connection;
}
const connection = connect();

module.exports = () => connection;
