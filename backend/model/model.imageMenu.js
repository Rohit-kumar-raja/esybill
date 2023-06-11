const mysql = require('mysql2/promise');
const db = require('../lib/db');

async function getImageMenu(propertyNo) {
  const connection = await db();
  const query = mysql.format('SELECT tblimagemenu from tblimagemenu WHERE PropertyNo=?', [propertyNo]);
  const result = await connection.query(query);
  return result[0];
}

module.exports = {
  getImageMenu
};
