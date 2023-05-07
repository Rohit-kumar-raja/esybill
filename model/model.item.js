const mysql = require('mysql2/promise');
const db = require('../lib/db');

async function insertItem(item) {
  const connection = await db.connect();
  const query = mysql.format('INSERT INTO tblitemname SET ?', item);
  await connection.query(query);
}

async function updateItem(item, categoryRN, propertyNo, itemNameRN) {
  const connection = await db.connect();
  const query = mysql.format('UPDATE tblitemname SET ? WHERE CategoryRN=? AND PropertyNo=? AND ItemNameRN=?', [item, categoryRN, propertyNo, itemNameRN]);
  await connection.query(query);
}

async function deleteItem(categoryRN, propertyNo, itemNameRN) {
  const connection = await db();
  const query = mysql.format('DELETE FROM tblitemname WHERE CategoryRN=? and PropertyNo=? AND ItemNameRN=?', [categoryRN, propertyNo, itemNameRN]);
  await connection.query(query);
}

async function getItemsByItemCategory(categoryRN, propertyNo) {
  const connection = await db();
  const query = mysql.format('SELECT * from tblitemname WHERE PropertyNo=? AND CategoryRN=?', [propertyNo, categoryRN]);
  const result = await connection.query(query);
  return result[0];
}

async function getItemsByProperty(propertyNo) {
  const connection = await db();
  const query = mysql.format('SELECT * from tblitemname JOIN tblitemcategory WHERE PropertyNo=?', [propertyNo]);
  const result = await connection.query(query);
  return result[0];
}

module.exports = {
  insertItem,
  updateItem,
  deleteItem,
  getItemsByItemCategory,
  getItemsByProperty
};
