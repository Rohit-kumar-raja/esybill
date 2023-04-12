const db = require('../lib/db');

async function getUser() {
  const connection = await db();
  const users = await connection.execute('SELECT * FROM tblmastercustomer');
  return users[0];
}

async function getUserById(id) {
  const connection = await db();
  const users = await connection.execute('SELECT * FROM tblmastercustomer WHERE id=?', [id]);
  return users[0];
}

module.exports = {
  getUser,
  getUserById
};
