const mailer = require('../util/mail');
const homeModel = require('../model/model.home');
const config = require('../config/config');
const propertyModel = require('../model/model.property');
const itemCategoryModel = require('../model/model.itemCategory');
const itemModel = require('../model/model.item');
const productModel = require('../model/model.product');
const imageMenuModel = require('../model/model.imageMenu');

async function insertFormData(form, formData) {
  try {
    await homeModel[form](formData);
    await mailer.sendMail(config.adminEmail, 'Subject', JSON.stringify(formData));
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
    if (property.MenuType === 'text') {
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
      menu = {};
      itemCategories.forEach((itemCategory) => {
        menu[itemCategory.ItemCategory] = {
          note: itemCategory.NoteOnItemCategory,
          subcategories: {}
        };
        const itemData = items.filter((item) => {
          if (item.CategoryRN === itemCategory.CategoryRN) return true;
          return false;
        });
        itemData.forEach((item) => {
          menu[itemCategory.ItemCategory].subcategories[item.ItemName] = {
            ...item,
            products: {}
          };
          const productData = products.filter((product) => {
            if (item.CategoryRN === product.CategoryRN && product.ItemNameRN === item.ItemNameRN) return true;
            return false;
          });
          productData.forEach((product) => {
            menu[itemCategory.ItemCategory].subcategories[item.ItemName].products[product.ProductName] = {
              ...product
            };
          });
        });
      });
    }
    else {
      const imageMenu = await imageMenuModel.getImageMenu(property.PropertyNo);
      if (imageMenu.length === 0) {
        return { success: false, status: 404, message: 'No Menu Found' };
      }
      menu = JSON.parse(imageMenu[0].ImageSequence);
    }
    return { success: true, menu };
  }
  catch (err) {
    if (err.code === 'ERR_NO_PROPERTY') {
      return { success: false, status: 404, message: err.code };
    }
    // eslint-disable-next-line
    console.log(err);
    return { success: false, status: 500, message: 'Internal Server Error' };
  }
}

module.exports = {
  insertFormData,
  getMenu
};
