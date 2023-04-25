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

async function insert(channel, otp) {
  const connection = await db();
  await connection.execute('INSERT INTO ezybill.tblmastercustomer() VALUES()');
  return true;
}

module.exports = {
  getUserByPhone,
  updateUser,
  insert
};
