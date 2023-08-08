const { S3Client, PutObjectCommand, DeleteObjectCommand } = require('@aws-sdk/client-s3');
require('dotenv').config();

const s3Client = new S3Client({ region: 'ap-south-1' });

// async function doesFolderExist(folderName) {
//   try {
//     const params = {
//       Bucket: 'myawsbucket-free',
//       Prefix: `${folderName}/`,
//       MaxKeys: 1
//     };

//     const data = await s3Client.send(new PutObjectCommand(params));
//     return data.Contents.length > 0;
//   }
//   catch (error) {
//     console.error('Error checking folder existence:', error);
//     throw error;
//   }
// }

// async function doesImageMenuExist(folderName) {
//   try {
//     const params = {
//       Bucket: 'myawsbucket-free',
//       Prefix: `${folderName}/ImageMenu/`,
//       Delimiter: '/'
//     };

//     const data = await s3Client.send(new PutObjectCommand(params));
//     return data.CommonPrefixes.length > 0;
//   }
//   catch (error) {
//     console.error('Error checking ImageMenu folder existence:', error);
//     throw error;
//   }
// }

// async function createFolder(folderName) {
//   try {
//     const params = {
//       Bucket: 'myawsbucket-free',
//       Key: `${folderName}/`
//     };

//     const command = new PutObjectCommand(params);
//     await s3Client.send(command);
//     console.log('Folder created:', folderName);
//   }
//   catch (error) {
//     console.error('Error creating folder:', error);
//     throw error;
//   }
// }

// async function createImageMenu(folderName) {
//   try {
//     const params = {
//       Bucket: 'myawsbucket-free',
//       Key: `${folderName}/ImageMenu/`
//     };

//     const command = new PutObjectCommand(params);
//     await s3Client.send(command);
//     console.log('ImageMenu folder created:', `${folderName}/ImageMenu`);
//   }
//   catch (error) {
//     console.error('Error creating ImageMenu folder:', error);
//     throw error;
//   }
// }

// async function uploadImage(PropertyNo, CustomerNo, ImageBuffer) {
//   try {
//     const folderName = `${PropertyNo}_${CustomerNo}`;
//     const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
//     const fileName = `${folderName}_${timestamp}`;

//     // Check if the folder already exists
//     const folderExists = await doesFolderExist(folderName);

//     if (!folderExists) {
//       await createFolder(folderName);
//     }

//     const imageMenuExists = await doesImageMenuExist(folderName);

//     if (!imageMenuExists) {
//       await createImageMenu(folderName);
//     }

//     const params = {
//       Bucket: 'myawsbucket-free',
//       Key: `${folderName}/ImageMenu/${fileName}`,
//       Body: ImageBuffer
//     };

//     const command = new PutObjectCommand(params);
//     const data = await s3Client.send(command);
//     console.log('Image uploaded successfully:', data);
//     return data;
//   }
//   catch (error) {
//     console.error('Error uploading image:', error);
//     throw error;
//   }
// }

// module.exports = {
//   uploadImage
// };

async function uploadImageToS3(bucketName, folderName, fileName, imageBuffer) {
  try {
    const params = {
      Bucket: bucketName,
      Key: `${folderName}/${fileName}`,
      Body: imageBuffer,
      ACL: 'public-read' // Set the ACL to make the uploaded image publicly accessible
    };

    const command = new PutObjectCommand(params);
    await s3Client.send(command);

    // Generate the public URL for the uploaded image
    const imageUrl = `https://${bucketName}.s3.amazonaws.com/${folderName}/${fileName}`;
    return imageUrl;
  }
  catch (error) {
    console.error('Error uploading image to S3:', error);
    throw error;
  }
}

async function deleteImageFromS3(bucketName, imageUrl) {
  const imageKey = imageUrl.split(`${bucketName}/`)[1];

  try {
    const deleteParams = {
      Bucket: bucketName,
      Key: imageKey
    };

    await s3Client.send(new DeleteObjectCommand(deleteParams));
    return { success: true, message: 'Image deleted from S3.' };
  }
  catch (error) {
    return { success: false, message: 'Error deleting image from S3.' };
  }
}

module.exports = {
  uploadImageToS3,
  deleteImageFromS3
};
