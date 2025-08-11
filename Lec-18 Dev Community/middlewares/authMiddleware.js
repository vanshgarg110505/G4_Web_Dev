const jwt = require('jsonwebtoken');
const User = require("../models/userModel");

const authMiddleware = async (req, res, next) => {
    const {authorization} = req.headers;
    const token = authorization.split(" ")[1];
    const userData = jwt.verify(token, process.env.JWT_SECRET);

    // console.log(userData);
    if(!userData){
        return res.status(401).json({
            message : "User Not Found"
        })
    }

    const { _id } = userData.user;    
    // console.log(_id);

    const user = await User.find({_id});

    if(user.length == 0){
        return res.status(401).json({
            message : "Unauthorized"
        })
    }

    req.user = user;

    next();
}

module.exports = authMiddleware;