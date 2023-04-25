const path = require('path');
const fs = require('fs');
const QRLogo = require('./qrcode');

async function generateQR(data, name, logo = '../assets/logos/logo.png') {
  await QRLogo.generateQRWithLogo(data, path.join(__dirname, logo), { margin: 1, width: 460 }, 'PNG', path.join(__dirname, '../assets/qrcodes/', `${name}.png`));
  // deleteTmpFile();
}

module.exports = {
  generateQR
};
