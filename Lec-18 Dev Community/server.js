const express = require("express");
require("dotenv").config();

const userRouter = require("./routes/userRoutes");
const profileRouter = require("./routes/profileRoutes");
const dbConnect = require("./config/database");

const app = express();

const PORT = process.env.PORT || 4888;

app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/profile', profileRouter);

dbConnect().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})