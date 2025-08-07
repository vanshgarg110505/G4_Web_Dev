const express = require('express');
const {getProfile, createProfile} = require("../controllers/profileController");
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.get("/", authMiddleware, getProfile);
router.post("/", createProfile);

module.exports = router;