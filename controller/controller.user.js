const customerModel = require('../model/model.customer');
const propertyModel = require('../model/model.property');
const { sendOTP } = require('../lib/otp');
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

async function login(user, properties) {
  try {
    await customerModel.insert(user);
    await propertyModel.bulkInsert(properties);
    return { success: true };
  }
  catch (err) {
    // eslint-disable-next-line
    console.log(err);
    return { success: false, status: 500, message: 'Internal Server Error' };
  }
}

module.exports = {
  getUser,
  getUserByPhone,
  sendLoginOtp,
  sendVerifyOtp,
  login
};
