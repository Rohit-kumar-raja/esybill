const itemCategoryModel = require('../model/model.itemCategory');

async function insertItemCategory(Itemcategory) {
  try {
    await itemCategoryModel.insertItemCategory(Itemcategory);
    return { success: true };
  }
  catch (err) {
    // eslint-disable-next-line
    console.log(err);
    return { success: false, status: 500, message: 'Internal Server Error' };
  }
}

async function updateItemCategory(Itemcategory, CategoryRN, PropertyNo) {
  try {
    await itemCategoryModel.updateItemCategory(Itemcategory, CategoryRN, PropertyNo);
    return { success: true };
  }
  catch (err) {
    // eslint-disable-next-line
    console.log(err);
    return { success: false, status: 500, message: 'Internal Server Error' };
  }
}

async function deleteItemCategory(CategoryRN, PropertyNo) {
  try {
    await itemCategoryModel.deleteItemCategory(CategoryRN, PropertyNo);
    return { success: true };
  }
  catch (err) {
    // eslint-disable-next-line
    console.log(err);
    return { success: false, status: 500, message: 'Internal Server Error' };
  }
}

async function getItemCategoriesByProperty(PropertyNo) {
  try {
    const itemCategory = await itemCategoryModel.getItemCategoriesByProperty(PropertyNo);
    return { success: true, itemCategory };
  }
  catch (err) {
    // eslint-disable-next-line
    console.log(err);
    return { success: false, status: 500, message: 'Internal Server Error' };
  }
}

async function getItemsByItemCategory(CategoryRN, PropertyNo) {
  try {
    const item = await itemCategoryModel.getItemsByItemCategory(CategoryRN, PropertyNo);
    return { success: true, item };
  }
  catch (err) {
    // eslint-disable-next-line
    console.log(err);
    return { success: false, status: 500, message: 'Internal Server Error' };
  }
}

module.exports = {
  insertItemCategory,
  updateItemCategory,
  deleteItemCategory,
  getItemCategoriesByProperty,
  getItemsByItemCategory
};
