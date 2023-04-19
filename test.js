const model = require('./model/model.otp');
require('dotenv').config();

model.insert('channel', 1234567890123)
  .then((res) => {
    console.log('res ', JSON.stringify(res));
  })
  .catch((err) => {
    console.log('err ', JSON.stringify(err));
  });
