const imageMenuModel = require('../model/model.imageMenu');
const propertyModel = require('../model/model.property');
const { uploadImageToS3, deleteImageFromS3 } = require('../util/s3MenuUpload');

function removeQuotesFromFirstAndLast(arrayString) {
  try {
    const array = JSON.parse(arrayString);

    if (!Array.isArray(array) || array.length === 0) {
      return array;
    }

    array.forEach((item) => {
      Object.keys(item).forEach((key) => {
        if (typeof item[key] === 'string') {
          // eslint-disable-next-line no-param-reassign
          item[key] = item[key].replace(/^(['"])(.*)\1$/, '$2');
        }
      });
    });

    return array;
  }
  catch (error) {
    return error;
  }
}

async function getImageMenu(PropertyNo) {
  try {
    const imageMenu = await imageMenuModel.getImageMenu(PropertyNo);
    console.log(imageMenu);
    return { success: true, imageMenu: imageMenu.length === 0 ? JSON.parse('[]') : removeQuotesFromFirstAndLast(imageMenu[0].ImageSequence) };
  }
  catch (err) {
    // eslint-disable-next-line
      console.log(err);
    return { success: false, status: 500, message: 'Internal Server Error' };
  }
}

async function insertImageMenu(propertyNo, image, text) {
  try {
    const imageMenu = await imageMenuModel.getImageMenu(propertyNo);
    const propertyDetails = await propertyModel.getAllPropertiesByPropertyNo(propertyNo);
    if (!propertyDetails) throw new Error('Invalid Property No');
    const customerNo = propertyDetails[0].CustomerNo;
    const propertyMenuName = propertyDetails[0].PropertyMenuName;
    // const imageUrl = await uploadImage(propertyNo, customerNo, image);
    const imageUrl = await uploadImageToS3('myawsbucket-free', customerNo, `${customerNo}_${propertyNo}`, image);

    if (imageMenu.length === 0) {
      const imageData = JSON.stringify([{
        imageUrl,
        text
      }]);
      await imageMenuModel.insertImageMenu(Number(propertyNo), propertyMenuName, JSON.stringify(imageData));
    }
    else {
      const parsedImageData = removeQuotesFromFirstAndLast(imageMenu[0].ImageSequence);
      parsedImageData.push({
        imageUrl,
        text
      });
      await imageMenuModel.updateImageMenu(JSON.stringify(parsedImageData), propertyNo);
    }

    return { success: true };
  }
  catch (err) {
  // eslint-disable-next-line
  console.log(err);
    return { success: false, status: 500, message: 'Internal Server Error' };
  }
}

async function swapImageMenu(propertyNo, originalPosition, newPosition) {
  try {
    const imageMenu = await imageMenuModel.getImageMenu(propertyNo);

    const parsedImageData = removeQuotesFromFirstAndLast(imageMenu[0].ImageSequence);

    if (originalPosition < 1 || newPosition < 1 || originalPosition > parsedImageData.length || newPosition > parsedImageData.length) {
      return { success: false, message: 'Invalid originalPosition or newPosition.' };
    }

    const tempImage = parsedImageData[originalPosition - 1];
    parsedImageData[originalPosition - 1] = parsedImageData[newPosition - 1];
    parsedImageData[newPosition - 1] = tempImage;

    const updatedImageSequence = JSON.stringify(parsedImageData);

    await imageMenuModel.swapImageMenu(updatedImageSequence, propertyNo);

    return { success: true, message: 'Images swapped successfully.', imageMenu };
  }
  catch (error) {
    return { success: false, message: 'An unexpected error occurred.' };
  }
}

async function deleteImage(propertyNo, pageNo) {
  console.log(propertyNo, pageNo);
  try {
    const imageMenu = await imageMenuModel.getImageMenu(propertyNo);

    const parsedImageData = removeQuotesFromFirstAndLast(imageMenu[0].ImageSequence);
    console.log(parsedImageData);

    // Check if the Page Number is valid
    if (pageNo < 1 || pageNo > parsedImageData.length) {
      return { success: false, message: 'Invalid Page Number.' };
    }

    const deleteStatus = await deleteImageFromS3('myawsbucket-free', parsedImageData[pageNo - 1]);
    if (!deleteStatus.success) throw new Error('Delete Unsucessful.');

    // Delete data of the given index (Page Number) from the ImageSequence array
    parsedImageData.splice(pageNo - 1, 1);

    await imageMenuModel.deleteImageMenu(parsedImageData, propertyNo);

    return { success: true, message: 'Image delete successfully.', imageMenu };
  }
  catch (error) {
    return { success: false, message: 'An unexpected error occurred.' };
  }
}

module.exports = {
  getImageMenu,
  insertImageMenu,
  swapImageMenu,
  deleteImage
};
