
const mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost:27017/magesDB");

const UserSchema = new mongoose.Schema({
    googleId: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    profilePicture: {
        type: String
    },
    role: {
        type: String,
        default: 'staff'
    }
})

module.exports = mongoose.model('User', UserSchema);
// const Mage = new mongoose.model("Mage", mageSchema)