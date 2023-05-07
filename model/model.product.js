const mysql = require('mysql2/promise');
const db = require('../lib/db');

async function insertProduct(product) {
  const connection = await db.connect();
  const query = mysql.format('INSERT INTO tblproductname SET ?', product);
  await connection.query(query);
}

async function updateProduct(product, categoryRN, propertyNo, itemNameRN, productNameRN) {
  const connection = await db.connect();
  const query = mysql.format(
    'UPDATE tblproductname SET ? WHERE CategoryRN=? AND PropertyNo=? AND ItemNameRN=? AND ProductNameRN=?',
    [product, categoryRN, propertyNo, itemNameRN, productNameRN]
  );
  await connection.query(query);
}

async function deleteProduct(categoryRN, propertyNo, itemNameRN, productNameRN) {
  const connection = await db();
  const query = mysql.format(
    'DELETE FROM tblproductname WHERE CategoryRN=? AND PropertyNo=? AND ItemNameRN=? AND ProductNameRN=?',
    [categoryRN, propertyNo, itemNameRN, productNameRN]
  );
  await connection.query(query);
}

async function getProductsByItem(propertyNo, categoryRN, itemNameRN) {
  const connection = await db();
  const query = mysql.format('SELECT * from tblproductname WHERE PropertyNo=? AND CategoryRN=? AND ItemNameRN=?', [propertyNo, categoryRN, itemNameRN]);
  const result = await connection.query(query);
  return result[0];
}

async function getProductsByProperty(propertyNo) {
  const connection = await db();
  const query = mysql.format('SELECT * from tblitemname JOIN tblitemcategory JOIN tblproductname WHERE PropertyNo=?', [propertyNo]);
  const result = await connection.query(query);
  return result[0];
}

module.exports = {
  insertProduct,
  updateProduct,
  deleteProduct,
  getProductsByItem,
  getProductsByProperty
};
