const Items = require('../model/model.js');
const Upload = require('../helper/upload.js');

async function postitems(req, res) {
    const upload = await Upload.uploadImage(req.file.path);
    console.log("Image uploaded to Cloudinary:", upload);
    const newItem = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        image: upload, // <-- use image field
        category: req.body.category,
        stock: req.body.stock
    };
    Items.create(newItem)
        .then((item) => {
            res.status(201).json({
                message: "Item added successfully",
                item: item
            });
        })
        .catch((error) => {
            console.log("Error adding item:", error);
            res.status(500).json({
                message: "Error adding item",
                error: error.message,

            });
        });
}

async function getitems(req, res) {
    try {
        const items = await Items.find();
        res.status(200).json(items);
    }
    catch (error) {
        console.error("Error fetching items:", error);
        res.status(500).json({
            message: "Error fetching items",
            error: error.message
        });
    }
}
async function getCatagoriesdata (req, res)  {
    try {
        const items = await require('../model/model.js').find({ category: req.params.category });
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: "Error fetching category items", error: error.message });
    }
}

module.exports = {
    postitems,
    getitems,
    getCatagoriesdata
};