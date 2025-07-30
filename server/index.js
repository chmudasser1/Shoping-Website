const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const connectUserdb = require("./connection/connection.js");
const router = require('./routers/router.js');
const multer = require('multer');

dotenv.config();

const app = express();
const port = process.env.PORT;

const mongodburl = process.env.MONGODB_URL;
if (!mongodburl) {
    console.error("MongoDB URL is not defined in environment variables.");
    process.exit(1);
}
connectUserdb(mongodburl);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Welcome to the Shopping Website API');
});
const upload = multer({ 
    storage:multer.diskStorage({}),
    limits: { fileSize: 5000000 }  
 });

app.use('/store', upload.single("image") ,router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});