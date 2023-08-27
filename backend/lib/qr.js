const path = require('path');
const QRLogo = require('../util/qrcode');

async function generateQR(data, name, logo = '../public/logos/logo.png') {
  await QRLogo.generateQRWithLogo(data, path.join(__dirname, logo), { margin: 1, width: 460 }, 'PNG', path.join(__dirname, '../public/qrcodes/', `${name}.png`));
  // deleteTmpFile();
}

module.exports = {
  generateQR
};
