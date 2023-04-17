const db = require('../lib/db');

async function getUser() {
  const connection = await db();
  const users = await connection.execute('SELECT * FROM tblmastercustomer');
  return users[0];
}

async function getUserByPhone(phone) {
  const connection = await db();
  const users = await connection.execute('SELECT * FROM tblmastercustomer WHERE RegMobile=?', [phone]);
  return users[0];
}

module.exports = {
  getUser,
  getUserByPhone
};
