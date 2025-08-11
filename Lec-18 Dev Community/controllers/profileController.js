const Profile = require("../models/profileModel")

const getProfile = async(req, res) => {
    const data = await Profile.find({});
    return res.status(200).json({
        message: "All Profiles",
        data
    });
}

const createProfile = async(req,res) => {
    const {imageUrl, summary, skills, workExperience, linkedinUrl, githubUrl, codingPlatform, resumeUrl} = req.body;

    if(!imageUrl || !summary || ! skills || !workExperience || !linkedinUrl || !githubUrl || !codingPlatform || !resumeUrl){
        return res.status(400).send({message : "Please add all mandatory fields."});
    }

    const existingProfile = await Profile.findOne({userId: req.user[0]._id});
    if(existingProfile){
        return res.status(400).json({
            message: "Profile already exists for this user."
        })
    }

    const newProfile = await Profile.create({
        userId: req.user[0]._id,
        imageUrl,
        summary,
        skills, 
        workExperience,
        linkedinUrl,
        githubUrl, 
        codingPlatform,
        resumeUrl
    });

    const data = await newProfile.save();
    return res.status(201).json({
        message: "Profile Created",
        data
    });
}

module.exports = {getProfile, createProfile};