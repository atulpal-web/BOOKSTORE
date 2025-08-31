const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    FullName: {
        type: String,
        required: true   
    },
    Email: {
        type: String,
        required: true,  
        unique: true
    },
    Password: {
        type: String,
        required: true   
    }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
