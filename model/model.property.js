const mysql = require('mysql2/promise');
const db = require('../lib/db');

async function insert(property) {
  const connection = await db();
  let propNo = await connection.query('select max(PropertyNo) as propNo from tblmasterproperty;');
  if (propNo[0][0].propNo) {
    propNo = propNo[0][0].propNo + 10;
  }
  else {
    propNo = 10;
  }
  // eslint-disable-next-line
  property.PropertyNo = propNo;
  const query = mysql.format('INSERT INTO tblmasterproperty SET ?', property);
  await connection.query(query);
  return true;
}

module.exports = {
  insert
};
