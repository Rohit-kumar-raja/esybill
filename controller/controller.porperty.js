const propertyModel = require('../model/model.property');

async function getAllProperties(custNo) {
  try {
    const properties = await propertyModel.getAll(custNo);
    return { success: true, properties };
  }
  catch (err) {
    // eslint-disable-next-line
    console.log(err);
    return { success: false, status: 500, message: 'Internal Server Error' };
  }
}

async function createProperty(property, custNo) {
  try {
    // eslint-disable-next-line
    property.CustomerNo = custNo;
    await propertyModel.insert(property);
    return { success: true };
  }
  catch (err) {
    if (err.code === 'ER_DUP_ENTRY') {
      if (err.message.includes('tblmasterproperty_ph_un')) {
        return { success: false, status: 400, message: 'ERR_DUP_PHONE' };
      } if (err.message.includes('tblmasterproperty_em_un')) {
        return { success: false, status: 400, message: 'ERR_DUP_EMAIL' };
      }
      // eslint-disable-next-line
      console.log(err);
      return { success: false, status: 500, message: 'Internal Server Error' };
    }
    // eslint-disable-next-line
    console.log(err);
    return { success: false, status: 500, message: 'Internal Server Error' };
  }
}

module.exports = {
  getAllProperties,
  createProperty
};
