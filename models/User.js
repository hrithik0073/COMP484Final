//Schema for collection Users for mongoDB

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name:{
        type: String,
        require:true
    },
    username: {
        type: String,
        require:true
    },
    password: {
        type: String,
        require:true
    },
    email: {
        type: String,
        require:true
    }
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

//module export
module.exports = User;