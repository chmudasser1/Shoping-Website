const mongoose =require( "mongoose");
const connectUserdb = async (url) => {
    try {
        await mongoose.connect(url);
        console.log("MongoDB is connected..");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};

module.exports = connectUserdb;