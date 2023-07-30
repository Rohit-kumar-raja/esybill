const mysql = require('mysql2/promise');
const db = require('../lib/db');

async function getImageMenu(PropertyNo) {
  const connection = await db();
  const query = mysql.format('SELECT ImageSequence from tblimagemenu WHERE PropertyNo=?', [PropertyNo]);
  const result = await connection.query(query);
  return result[0];
}

async function updateImageMenu(PropertyNo, imageMenu) {
  const connection = await db();
  const query = mysql.format('UPDATE tblimagemenu SET ImageSequence=? WHERE PropertyNo=?', [imageMenu, PropertyNo]);
  await connection.query(query);
}

async function insertImageMenu(imageMenu) {
  const connection = await db();
  const query = mysql.format('INSERT INTO tblimagemenu SET ?', [imageMenu]);
  await connection.query(query);
}

module.exports = {
  getImageMenu,
  updateImageMenu,
  insertImageMenu
};
