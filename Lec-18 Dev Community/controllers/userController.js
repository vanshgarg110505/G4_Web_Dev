const User = require("../models/userModel");
const bcrypt = require('bcrypt');
const generateToken = require('../utils/generateToken');
const validator = require('validator');

const registerUser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    
    // validation
    if(!firstName || !email || !password){
        return res.status(400).json({ message: "Please add all mandatory fields" });
    }

    if(!validator.isEmail(email)){
        return res.status(400).send({ message: "Please Provide Correct Email" });
    }

    if(!validator.isStrongPassword(password)){
        return res.status(400).send({ message: "Please Provide Strong Password" });
    }

    try {
        // check if user already exists in db or not
        const userExists = await User.findOne({ email });
        if(userExists){
            return res.status(400).json({ message: "User already exists" });
        }

        // hash password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // create a user in DB
        const newUser = await User.create({ 
            firstName, 
            lastName, 
            email, 
            password : hashedPassword
        });

        const token = generateToken(newUser);

        res.status(201).json({ message: "User created successfully", token });
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};

const loginUser = async (req, res) => {
    const {email, password} = req.body;

    // validation
    if(!email || !password){
        return res.status(400).json({ message: "Please add all mandatory fields" });
    }

    try {
        const userExists = await User.findOne({email});
        if(!userExists){
            return res.status(400).json({ message: "No user found" });
        }

        // verify password
        const isValid = await bcrypt.compare(password, userExists.password);
        if(!isValid){
            return res.status(400).json({ message: "Incorrect Password" });
        }

        const token = generateToken(userExists);
        res.status(200).json({message : "Logged In", token});
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { registerUser, loginUser };