const productModel = require('../model/model.product');

async function insertProduct(item) {
  try {
    await productModel.insertProduct(item);
    return { success: true };
  }
  catch (err) {
    // eslint-disable-next-line
    console.log(err);
    return { success: false, status: 500, message: 'Internal Server Error' };
  }
}

async function updateProduct(product, CategoryRN, PropertyNo, ItemNameRN, ProductNameRN) {
  try {
    await productModel.updateProduct(product, CategoryRN, PropertyNo, ItemNameRN, ProductNameRN);
    return { success: true };
  }
  catch (err) {
    // eslint-disable-next-line
    console.log(err);
    return { success: false, status: 500, message: 'Internal Server Error' };
  }
}

async function deleteProduct(CategoryRN, PropertyNo, ItemNameRN, ProductNameRN) {
  try {
    await productModel.deleteProduct(CategoryRN, PropertyNo, ItemNameRN, ProductNameRN);
    return { success: true };
  }
  catch (err) {
    // eslint-disable-next-line
    console.log(err);
    return { success: false, status: 500, message: 'Internal Server Error' };
  }
}

async function getProductsByItem(PropertyNo, CategoryRN, ItemNameRN) {
  try {
    const products = await productModel.getProductsByItem(PropertyNo, CategoryRN, ItemNameRN);
    return { success: true, products };
  }
  catch (err) {
    // eslint-disable-next-line
    console.log(err);
    return { success: false, status: 500, message: 'Internal Server Error' };
  }
}

module.exports = {
  insertProduct,
  updateProduct,
  deleteProduct,
  getProductsByItem
};
