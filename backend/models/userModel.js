const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fname : {
        type : String,
        required: true
    },
    lname : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    contact : {
        type : String,
        required: true
    },
    password : {
        type: String,
        required: true
    }
 

})

//user table and path
const User = mongoose.model("user",UserSchema);
module.exports = User;