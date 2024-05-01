const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: [true, "Name is required"],
        minLength: [3, "Name atleast have 3 character."],
    },
    username:{
        type: String,
        trim: true,
        unique: true,
        required: [true, "username is required"],
        minLength: [3, "username atleast have 3 character."],
    },
    email:{
        type: String,
        trim: true,
        required: [true, "email is required"],
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    },
    password: String,
},{timestamps: true});

module.exports = mongoose.model('user',userSchema);