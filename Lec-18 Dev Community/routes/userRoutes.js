const express = require("express");
const { registerUser } = require("../controllers/userController");
const router = express.Router();

const app = express();

router.use(function(req,res,next){
    console.log("This is router level middleware")
    next();
})

router.post("/register", registerUser);

module.exports = router;