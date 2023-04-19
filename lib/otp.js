const sms = require('./sms');
const mail = require('./mail');
const otpModel = require('../model/model.otp');

function generateOTP() {
  const digits = '0123456789';
  let OTP = '';
  for (let i = 0; i < 4; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
}

/**
 *
 * @param {String} email
 * @param {Number} number
 * @param {String} type
 * @returns Object
 */
async function sendOTP(email, number, type) {
  const validity = 5;
  const validOtp = await otpModel.getOTPByChannel(email || number, validity);
  let otp;
  let insertOtp = true;
  if (validOtp.length > 0) {
    otp = validOtp[0].otp;
    insertOtp = true;
  }
  else otp = generateOTP();
  const loginMsg = `Dear Customer, the OTP to Login to your EzyBill India account is ${otp} and valid for ${validity} min. - Eastland Microsystems`;
  const regMsg = `Welcome to EzyBill India digital services, OTP for registration is ${otp} and valid for ${validity} min. - Eastland Microsystems`;
  let msg;
  if (type === 'login') msg = loginMsg;
  else if (type === 'verify') msg = regMsg;
  if (email) {
    if (await mail.sendMail(msg, email)) {
      if (insertOtp) {
        await otpModel.insert(email, otp);
      }
      return true;
    }
  }
  if (await mail.sendSMS(msg, number)) {
    if (insertOtp) {
      await otpModel.insert(number, otp);
    }
    return true;
  }
  return false;
}

async function verifyOTP(otp, email, number) {
  return true;
}

/**
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
async function verifyOTPMiddleware(req, res, next) {
  if (verifyOTP(req.body.otp, req.body.email, req.body.number)) next();
  else res.status(401).send({ message: 'Invalid OTP', code: 'INVALID_OTP' });
}

module.exports = {
  sendOTP,
  verifyOTPMiddleware
};
