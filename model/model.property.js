const mysql = require('mysql2/promise');
const db = require('../lib/db');

async function insert(property) {
  const connection = await db();
  let PropertyNo = await connection.query('select max(PropertyNo) as propNo from tblmasterproperty;');
  if (PropertyNo[0][0].propNo) {
    PropertyNo = PropertyNo[0][0].propNo + 10;
  }
  else {
    PropertyNo = 10;
  }
  // eslint-disable-next-line
  property.PropertyNo = PropertyNo;
  const query = mysql.format('INSERT INTO tblmasterproperty SET ?', property);
  await connection.query(query);
  return true;
}

async function getAllProperties(customerNo) {
  const connection = await db();
  const result = await connection.query('select * from tblmasterproperty where CustomerNo=?'[customerNo]);
  return result[0];
}

async function getPropertyById(propertyNo, customerNo) {
  const connection = await db();
  const result = await connection.query('select * from tblmasterproperty where CustomerNo=? and PropertyNo=?', [customerNo, propertyNo]);
  if (result[0].length < 1) {
    const err = new Error('No Such Property');
    err.code = 'ERR_NO_PROPERTY';
    throw err;
  }
  return result[0];
}

async function updateProperty(property, propertyNo, customerNo) {
  const connection = await db();
  const query = mysql.format('UPDATE tblmasterproperty SET ? WHERE CustomerNo=? and PropertyNo=?', [property, customerNo, propertyNo]);
  await connection.query(query);
}

async function deleteProperty(propertyNo, customerNo) {
  const connection = await db();
  const query = mysql.format('DELETE FROM tblmasterproperty WHERE CustomerNo=? and PropertyNo=?', [customerNo, propertyNo]);
  await connection.query(query);
}

async function getItemCategoriesByProperty(propertyNo) {
  const connection = await db();
  const query = mysql.format('SELECT * FROM tblitemcategory WHERE PropertyNo=?', [propertyNo]);
  await connection.query(query);
}

async function getItemsByProperty(propertyNo) {
  const connection = await db();
  const query = mysql.format('SELECT * from tblitemname JOIN tblitemcategory WHERE PropertyNo=?', [propertyNo]);
  await connection.query(query);
}

async function getProductsByProperty(propertyNo) {
  const connection = await db();
  const query = mysql.format('SELECT * from tblitemname JOIN tblitemcategory JOIN tblproductname WHERE PropertyNo=?', [propertyNo]);
  await connection.query(query);
}

module.exports = {
  insert,
  getAllProperties,
  getPropertyById,
  updateProperty,
  deleteProperty,
  getItemCategoriesByProperty,
  getItemsByProperty,
  getProductsByProperty
};
