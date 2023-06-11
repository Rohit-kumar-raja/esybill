const imageMenuModel = require('../model/model.imageMenu');

async function getImageMenu(PropertyNo) {
  try {
    const imageMenu = await imageMenuModel.getImageMenu(PropertyNo);
    return { success: true, imageMenu };
  }
  catch (err) {
    // eslint-disable-next-line
      console.log(err);
    return { success: false, status: 500, message: 'Internal Server Error' };
  }
}

module.exports = {
  getImageMenu
};
