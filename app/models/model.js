const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmpassword: {
        type: String,
        required: true
    },
    Region: {
        type: String,
        required: true
    },
    Religion: {
        type: String,
        required: true
    }
})

const User = mongoose.model("user", userSchema);

module.exports = User;
module.exports = User;