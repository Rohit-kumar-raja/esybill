const nodeMailer = require('nodemailer');
const config = require('../config/config');

const transporter = nodeMailer.createTransport({
  host: 'smtp.zoho.com',
  secure: true,
  port: 465,
  auth: {
    user: 'email@domain.is',
    pass: 'password_here'
  }
});

// Service Check Using Gmail
// const transporterGmail = nodeMailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: config.testEmail,
//     pass: config.testEmailPassword
//   }
// });
// function sendMail(email, subject, body) {
//   return new Promise((resolve, reject) => {
//     const mailOptions = {
//       from: 'email@domain.com',
//       to: email,
//       subject,
//       html: body
//     };
//     transporter.sendMail(mailOptions, (err, info) => {
//       if (err) {
//         return reject(err);
//       }
//       return resolve();
//     });
//   });
// }
function sendMail(email, subject, body) {
  return new Promise((resolve, reject) => {
    const mailOptions = {
      from: config.testEmail,
      to: email,
      subject,
      html: body
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        reject(err);
      }
      else {
        resolve(info);
      }
    });
  });
}

module.exports = { sendMail };
