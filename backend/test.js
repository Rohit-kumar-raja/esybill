const mail = require('./util/mail');

mail.sendMail('suryansgoel1998@gmail.com', 'TEST', null, 'TEST')
  .then((data) => console.log('DATA--- ', data))
  .catch((err) => console.log('ERROR--- ', err));
