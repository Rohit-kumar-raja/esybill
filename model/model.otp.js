const db = require('../lib/db');

async function insert(channel, otp) {
  const connection = await db();
  await connection.execute('INSERT INTO tblotp (channel, otp) VALUES(?, ?)', [channel, otp]);
  return true;
}

async function getOTPByChannel(channel, validity) {
  const connection = await db();
  const result = await connection.execute('SELECT otp FROM tblotp WHERE channel=? AND created > current_timestamp - interval ? minute', [channel, validity]);
  return result[0];
}

module.exports = {
  insert,
  getOTPByChannel
};
