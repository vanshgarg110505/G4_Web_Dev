const User = require("../models/userModel");

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
    res.status(201).json({ message: "User created successfully", newUser });
};

// const loginUser = () => {

// };

module.exports = { registerUser };