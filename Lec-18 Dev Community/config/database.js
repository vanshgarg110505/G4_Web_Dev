const mongoose = require("mongoose");

const dbConnect = async() => {
    await mongoose.connect(process.env.CONNECTION_URI).then(() => {
        console.log("Connected to MongoDB");
    })
}

module.exports = dbConnect;