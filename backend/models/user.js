const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create ninja Schema & model
const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Name field is required'],
        unique: true
    },
    password: {
        type: Object,
        required: [true, 'Password field is required'],
    }
});

const User = mongoose.model('user', UserSchema);

module.exports = User;