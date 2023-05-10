const customerModel = require('../model/model.customer');
const propertyModel = require('../model/model.property');
const { sendOTP } = require('../lib/otp');
const qr = require('../lib/qr');
const { getToken } = require('../lib/token');

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
    if (err.code === 'ERR_NO_USER') {
      return { success: false, status: 400, message: err.code };
    }
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
    console.log(user);
    let result = { success: false, status: 500, message: 'Internal Server Error' };
    const responses = await Promise.allSettled([
      sendOTP({ number: user.RegMobile, type: 'login' }),
      sendOTP({ email: user.RegEmail, type: 'login' })
    ]);
    responses.forEach((response) => {
      if (response.status) {
        result = { success: true };
      }
    });
    return result;
  }
  catch (err) {
    if (err.code === 'ERR_NO_USER') {
      return { success: false, status: 400, message: err.code };
    }
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
    if (await sendOTP({ email, number: phone, type: 'verify' })) {
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

/**
 *
 * @param {Object} user
 * @param {Array} properties
 * @returns Object
 */
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
      await propertyModel.insertProperty(property);
    }
    return { success: true };
  }
  catch (err) {
    // eslint-disable-next-line
    console.log(err);
    if (err.code === 'ER_DUP_ENTRY') {
      if (err.message.includes('ph_un')) {
        return { success: false, status: 400, message: 'ERR_DUP_PHONE' };
      }
      if (err.message.includes('em_un')) {
        return { success: false, status: 400, message: 'ERR_DUP_EMAIL' };
      }
      // eslint-disable-next-line
      console.log(err);
      return { success: false, status: 500, message: 'Internal Server Error' };
    }
    return { success: false, status: 500, message: 'Internal Server Error' };
  }
}

/**
 *
 * @param {Number} phone
 * @returns Object
 */
async function login(phone) {
  try {
    const details = await customerModel.getUserByPhone(phone);
    const token = await getToken({ RegMobile: details.RegMobile, CustomerName: details.CustomerName, CustomerNo: details.CustomerNo });
    if (token) {
      return { success: true, accessToken: token };
    }
    return { success: false, status: 500, message: 'Internal Server Error' };
  }
  catch (err) {
    if (err.code === 'ERR_NO_USER') {
      return { success: false, status: 400, message: err.code };
    }
    // eslint-disable-next-line
    console.log(err);
    return { success: false, status: 500, message: 'Internal Server Error' };
  }
}

async function update(user, customerNo) {
  try {
    await customerModel.updateUser(user, customerNo);
    return { success: true };
  }
  catch (err) {
    // eslint-disable-next-line
    console.log(err);
    return { success: false, status: 500, message: 'Internal Server Error' };
  }
}

module.exports = {
  getUserByPhone,
  sendLoginOtp,
  sendVerifyOtp,
  register,
  login,
  update
};
