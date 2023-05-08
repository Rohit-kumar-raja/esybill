const nodeMailer = require('nodemailer');

const transporter = nodeMailer.createTransport({
  host: 'smtp.zoho.com',
  secure: true,
  port: 465,
  auth: {
    user: 'email@domain.is',
    pass: 'password_here'
  }
});
function sendMail(email, subject, body) {
  return new Promise((resolve, reject) => {
    const mailOptions = {
      from: 'email@domain.com',
      to: email,
      subject,
      html: body
    };
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return reject(err);
      }
      return resolve();
    });
  });
}

module.exports = { sendMail };
