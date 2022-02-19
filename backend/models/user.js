const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create ninja Schema & model
const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Name field is required'],
    },
    password: {
        type: String,
        required: [true, 'Password field is required'],
    }
});

const User = mongoose.model('ninja', UserSchema);

module.exports = User;