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

const updateProfileDetails = async(req, res) => {
    try {
        const {_id} = req.user[0]; // userid from loggedin user
        
        // Check if profile exists
        const existingProfile = await Profile.findOne({ userId: _id });
        if (!existingProfile) {
            return res.status(404).json({
                message: "Profile not found. Please create one first."
            });
        }

        // Update fields (only those provided in req.body)
        const updatedProfile = await Profile.findOneAndUpdate(
            { userId: _id },
            { $set: req.body },
            { new: true, runValidators: true } // returns updated document & runs schema validators
        );

        return res.status(200).json({
            message: "Profile updated successfully",
            data: updatedProfile
        });
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
}

module.exports = {getProfile, createProfile, updateProfileDetails};