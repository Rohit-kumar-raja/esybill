const nodeMailer = require('nodemailer');

const transporter = nodeMailer.createTransport({
  host: 'smtppro.zoho.in',
  secure: true,
  port: 465,
  auth: {
    user: process.env.ZOHO_USERNAME,
    pass: process.env.ZOHO_PASSWORD
  }
});
// function sendMail(email, subject, text = '', html = '') {
//   return new Promise((resolve, reject) => {
//     const mailOptions = {
//       from: 'noreply@ezybillindia.com',
//       to: email,
//       subject,
//       text,
//       html
//     };
//     transporter.sendMail(mailOptions, (err, info) => {
//       if (err) {
//         return reject(err);
//       }
//       return resolve(info);
//     });
//   });
// }
async function sendMail(email, subject, text = '', html = '') {
  const mailOptions = {
    from: 'noreply@ezybillindia.com',
    to: email,
    subject,
    text,
    html
  };
  return transporter.sendMail(mailOptions);
}

module.exports = { sendMail };
