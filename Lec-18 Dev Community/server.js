const express = require("express");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");
const dbConnect = require("./config/database");
const app = express();

const PORT = process.env.PORT || 4888;

app.use(express.json());

app.use('/api/user', userRoutes);

dbConnect().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})












