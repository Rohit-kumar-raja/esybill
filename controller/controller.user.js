const customerModel = require('../model/model.customer');
const propertyModel = require('../model/model.property');
const { sendOTP } = require('../lib/otp');
const qr = require('../lib/qr');

/**
 *
 * @returns Object
 */
async function getUser() {
  try {
    const users = await customerModel.getUser();
    return { success: true, data: users };
  }
  catch (err) {
  // eslint-disable-next-line
  console.log(err);
    return { success: false, status: 500, message: 'Internal Server Error' };
  }
}
/**
 *
 * @param {Number} phone
 * @returns Object
 */
async function getUserByPhone(phone) {
  try {
    const user = await customerModel.getUserByPhone(phone);
    return { success: true, data: user };
  }
  catch (err) {
    // eslint-disable-next-line
    console.log(err);
    return { success: false, status: 500, message: 'Internal Server Error' };
  }
}
/**
 *
 * @param {Number} phone
 * @returns Object
 */
async function sendLoginOtp(phone) {
  try {
    const user = await customerModel.getUserByPhone(phone);
    let result = { success: false, status: 500, message: 'Internal Server Error' };
    const responses = await Promise.allSettled([
      sendOTP({ number: user.RegMobile, type: 'login' }),
      sendOTP({ email: user.RegEmail, type: 'verify' })
    ]);
    responses.forEach((response) => {
      if (response.status) {
        result = { success: true };
      }
    });
    return result;
  }
  catch (err) {
    // eslint-disable-next-line
    console.log(err);
    return { success: false, status: 500, message: 'Internal Server Error' };
  }
}

/**
 *
 * @param {String} email
 * @param {Number} phone
 * @returns Object
 */
async function sendVerifyOtp(email, phone) {
  try {
    if (await sendOTP(email, phone)) {
      return { success: true };
    }
    return { success: false, status: 500, message: 'Internal Server Error' };
  }
  catch (err) {
    // eslint-disable-next-line
    console.log(err);
    return { success: false, status: 500, message: 'Internal Server Error' };
  }
}

async function register(user, properties) {
  try {
    const custId = await customerModel.insert(user);
    for (const property of properties) {
      property.CustomerNo = custId;
      const PropertyMenuName = `${property.PropName.trim().replace(' ', '-')}-${new Date().getTime()}`;
      property.PropertyMenuName = PropertyMenuName;
      qr.generateQR(`${process.env.MENU_URL}/${PropertyMenuName}`, PropertyMenuName);
      property.QRLocation = `${process.env.URL}/assets/qrcodes/${PropertyMenuName}.png`;
      // eslint-disable-next-line
      await propertyModel.insert(property);
    }
    return { success: true };
  }
  catch (err) {
    // eslint-disable-next-line
    console.log(err);
    if (err.code === 'ER_DUP_ENTRY') {
      return { success: false, status: 400, message: 'Phone already registered' };
    }
    return { success: false, status: 500, message: 'Internal Server Error' };
  }
}

module.exports = {
  getUser,
  getUserByPhone,
  sendLoginOtp,
  sendVerifyOtp,
  register
};
