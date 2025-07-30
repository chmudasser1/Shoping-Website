const cloudinary = require('cloudinary').v2;
// At the very top of your main server file
require('dotenv').config();
cloudinary.config({
    cloud_name: process.env.Cloud_Name,
    api_key: process.env.API_Key,
    api_secret: process.env.API_Secret
});

const uploadImage = async (filePath) => {
    try {
        const result = await cloudinary.uploader.upload(filePath);
        console.log("Image uploaded successfully:", result);
        return result.secure_url; // Return the secure URL of the uploaded image
    } catch (error) {
        console.error("Error uploading image:", error);
    }
}
module.exports = {
    uploadImage
};