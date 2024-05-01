const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/SocialMedia1").then(() => {
    console.log("connected to db");
}).catch(err => console.log(err));