const ImageKit = require("@imagekit/nodejs");

const client = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function uploadFile(file, fileName) {
  const result = await client.files.upload({
    file: file,
    filename: fileName,
  });
  return result;
}

module.exports = { uploadFile };
