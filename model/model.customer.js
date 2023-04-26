const mysql = require('mysql2/promise');
const db = require('../lib/db');

async function getUserByPhone(phone) {
  const connection = await db();
  const users = await connection.execute('SELECT * FROM tblmastercustomer WHERE RegMobile=?', [phone]);
  return users[0];
}

async function updateUser(user, phone) {
  const connection = await db();
  const users = await connection.execute('UPDATE ezydiner.tblmastercustomer SET CustomerName=?, RegMobile=?, RegEmail=?, State=?, Country=? WHERE RegMobile=?', [phone]);
  return users[0];
}

async function insert(user) {
  const connection = await db();
  let custNo = await connection.execute('select max(CustomerNo) as custNo from tblmastercustomer;');
  if (custNo[0][0].custNo) {
    custNo = custNo[0][0].custNo + 10;
  }
  else {
    custNo = 10;
  }
  // eslint-disable-next-line
  user.CustomerNo = custNo;
  const query = mysql.format('INSERT INTO tblmastercustomer SET ?', user);
  await connection.query(query);
  return custNo;
}

module.exports = {
  getUserByPhone,
  updateUser,
  insert
};
