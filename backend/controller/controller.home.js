const mailer = require('../util/mail');
const homeModel = require('../model/model.home');
const config = require('../config/config');

async function insertFormData(form, formData) {
  try {
    await homeModel[form](formData);
    await mailer.sendMail(config.adminEmail, 'Subject', JSON.stringify(formData));
    return { success: true };
  }
  catch (err) {
    // eslint-disable-next-line
    console.log(err);
    return { success: false, status: 500, message: 'Internal Server Error' };
  }
}

module.exports = {
  insertFormData
};
