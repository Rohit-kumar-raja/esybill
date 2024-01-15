const path = require('path');
const QRLogo = require('../util/qrcode');
const { uploadImageToS3 } = require('../util/s3MenuUpload');

async function generateQR(data, name, logo = '../public/logos/logo.png') {
  await QRLogo.generateQRWithLogo(data, path.join(__dirname, logo), { margin: 1, width: 460 }, 'Base64', path.join(__dirname, '../public/qrcodes/', `${name}.png`), async (b64Image) => {
    const location = await uploadImageToS3(process.env.S3_BUCKET, 'QRCodes', `${name}.png`, b64Image);
    return location;
  });
  // deleteTmpFile();
}

module.exports = {
  generateQR
};
