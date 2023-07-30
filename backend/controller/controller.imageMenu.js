const fse = require('fs-extra');
const imageMenuModel = require('../model/model.imageMenu');

async function getImageMenu(PropertyNo) {
  try {
    const imageMenu = await imageMenuModel.getImageMenu(PropertyNo);
    return { success: true, imageMenu: JSON.parse(imageMenu) };
  }
  catch (err) {
    // eslint-disable-next-line
      console.log(err);
    return { success: false, status: 500, message: 'Internal Server Error' };
  }
}

async function deleteImage(PropertyNo, pageNo) {
  try {
    const imageMenu = await imageMenuModel.getImageMenu(PropertyNo);
    fse.remove(imageMenu[pageNo].path);
    imageMenu.splice(pageNo, 1);
    await imageMenuModel.updateImageMenu(PropertyNo, JSON.stringify(imageMenu));
    return { success: true, imageMenu };
  }
  catch (err) {
  // eslint-disable-next-line
  console.log(err);
    return { success: false, status: 500, message: 'Internal Server Error' };
  }
}

async function upsertImageMenu(PropertyNo, pageNo) {
  try {
    const imageMenu = await imageMenuModel.getImageMenu(PropertyNo);
    fse.remove(imageMenu[pageNo].path);
    imageMenu.splice(pageNo, 1);
    await imageMenuModel.updateImageMenu(PropertyNo, JSON.stringify(imageMenu));
    return { success: true, imageMenu };
  }
  catch (err) {
  // eslint-disable-next-line
  console.log(err);
    return { success: false, status: 500, message: 'Internal Server Error' };
  }
}

async function updateImageMenu(PropertyNo, pageNo) {
  try {
    const imageMenu = await imageMenuModel.getImageMenu(PropertyNo);
    fse.remove(imageMenu[pageNo].path);
    imageMenu.splice(pageNo, 1);
    await imageMenuModel.updateImageMenu(PropertyNo, JSON.stringify(imageMenu));
    return { success: true, imageMenu };
  }
  catch (err) {
  // eslint-disable-next-line
  console.log(err);
    return { success: false, status: 500, message: 'Internal Server Error' };
  }
}

module.exports = {
  getImageMenu,
  deleteImage,
  upsertImageMenu,
  updateImageMenu
};
