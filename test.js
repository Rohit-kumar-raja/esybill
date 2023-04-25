const qr = require('./lib/qr');

qr.generateQR('hello', 'test2').then(() => {
  console.log('done');
}).catch((err) => {
  console.log(err);
});
