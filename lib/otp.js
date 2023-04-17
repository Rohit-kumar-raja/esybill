const sms = require('./sms');
const mail = require('./mail');

function generateOTP() {
  const digits = '0123456789';
  let OTP = '';
  for (let i = 0; i < 4; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
}
async function sendOTP(email, number) {
  const otp = generateOTP();
  if (email) {
    mail.sendMail(email, otp);
  }
  else {
    sms.sendSMS(number, otp);
  }
  return true;
}

async function verifyOTP(otp, email, number) {
  return true;
}

async function verifyOTPMiddleware(req, res, next) {
  if (verifyOTP(req.body.otp, req.body.email, req.body.number)) next();
  else res.status(401).send({ message: 'Invalid OTP', code: 'INVALID_OTP' });
}

module.exports = {
  sendOTP,
  verifyOTPMiddleware
};
