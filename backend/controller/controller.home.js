const mailer = require('../util/mail');
const homeModel = require('../model/model.home');
const config = require('../config/config');
const propertyModel = require('../model/model.property');
const itemCategoryModel = require('../model/model.itemCategory');
const itemModel = require('../model/model.item');
const productModel = require('../model/model.product');
const imageMenuModel = require('../model/model.imageMenu');
const emailTemplates = require('../emailTemplates');

async function insertFormData(form, formData) {
  try {
    await homeModel[form](formData);
    await mailer.sendMail(config.adminEmail, 'User Request', emailTemplates.adminMail(form, formData));
    mailer.sendMail(formData.email, 'Thank you for contacting EzyBill India', emailTemplates[form](formData));
    return { success: true };
  }
  catch (err) {
    // eslint-disable-next-line
    console.log(err);
    return { success: false, status: 500, message: 'Internal Server Error' };
  }
}

async function getMenu(menuName) {
  try {
    const property = await propertyModel.getPropertyByMenuName(menuName);
    let menu;
    const menuType = property.MenuType;
    if (menuType === 'text') {
      const itemCategoryPromise = itemCategoryModel.getItemCategoriesByProperty(property.PropertyNo);
      const itemPromise = itemModel.getItemsByProperty(property.PropertyNo);
      const productPromise = productModel.getProductsByProperty(property.PropertyNo);
      const data = await Promise.allSettled([itemCategoryPromise, itemPromise, productPromise]);
      const itemCategories = data[0].value;
      const items = data[1].value;
      const products = data[2].value;
      if (products.length <= 0) {
        return { success: false, status: 404, message: 'No Menu Found' };
      }
      menu = [];
      itemCategories.forEach((itemCategory) => {
        const categoryData = {
          category: itemCategory.ItemCategory,
          note: itemCategory.NoteOnItemCategory,
          subcategories: []
        };
        const itemData = items.filter((item) => item.CategoryRN === itemCategory.CategoryRN);
        itemData.forEach((item) => {
          const subcategoryData = {
            subcategory: item.ItemName,
            ...item,
            products: []
          };
          const productData = products.filter(
            (product) => item.CategoryRN === product.CategoryRN && product.ItemNameRN === item.ItemNameRN
          );
          productData.forEach((product) => {
            subcategoryData.products.push(product);
          });
          categoryData.subcategories.push(subcategoryData);
        });
        menu.push(categoryData);
      });
    }
    else {
      const imageMenu = await imageMenuModel.getImageMenu(property.PropertyNo);
      if (imageMenu.length === 0) {
        return { success: false, status: 404, message: 'No Menu Found' };
      }
      menu = JSON.parse(imageMenu[0].ImageSequence);
    }
    return { success: true, status: 200, data: { menuType, menu } };
  }
  catch (err) {
    if (err.code === 'ERR_NO_PROPERTY') {
      return { success: false, status: 404, message: err.code };
    }
    return { success: false, status: 500, message: 'Internal Server Error' };
  }
}

module.exports = {
  insertFormData,
  getMenu
};
