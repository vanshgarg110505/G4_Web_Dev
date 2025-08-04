const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const app = express();

const PORT = process.env.PORT || 4888;

app.use(express.json());

app.use(function(req,res,next){
    console.log("This is app level middleware")
    next();
})

app.use('/api/user', userRoutes);



async function dbConnect(){
    await mongoose.connect(process.env.CONNECTION_URI).then(() => {
        console.log("Connected to MongoDB");
    })
}

dbConnect().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})












