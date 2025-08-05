const User = require("../models/userModel");
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    return jwt.sign({user}, process.env.JWT_SECRET);
}

const registerUser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    
    // validation
    if(!firstName || !email || !password){
        return res.status(400).json({ message: "Please add all mandatory fields" });
    }

    // check if user already exists in db or not
    const userExists = await User.findOne({ email });
    if(userExists){
        return res.status(400).json({ message: "User already exists" });
    }

    // create a user in DB
    const newUser = await User.create({ 
        firstName, 
        lastName, 
        email, 
        password 
    });

    const token = generateToken(newUser);

    res.status(201).json({ message: "User created successfully", token });
};

const loginUser = async (req, res) => {
    const {email, password} = req.body;

    // validation
    if(!email || !password){
        return res.status(400).json({ message: "Please add all mandatory fields" });
    }

    const userExists = await User.findOne({email});
    if(!userExists){
        return res.status(400).json({ message: "No user found" });
    }

    // verify password
    if(req.body.password != userExists.password){
        return res.status(400).json({ message: "Incorrect Password" });
    }

    const token = generateToken(userExists);
    res.status(200).json({message : "Logged In", token});
};

module.exports = { registerUser, loginUser };