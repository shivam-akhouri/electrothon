const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create manufacturer Schema & model
const ManufacturerSchema = new Schema({
    companyName: {
        type: String,
        required: [true, 'companyName field is required'],
    },
    companyOwner: {
        type: String,
        required: [true, 'companyOwner field is required'],
    },
    companyLocation: {
        type: String,
        required: [true, 'companyLocation field is required'],
    },
    postalCode: {
        type: Number,
        required: [true, 'postalCode field is required'],
    },
    email: {
        type: String,
        required: [true, 'email field is required'],
    },
    phoneNo: {
        type: Number,
        required: [true, 'phoneNo field is required'],
    }
});

const Manufacturer = mongoose.model('manufacturer', ManufacturerSchema);

module.exports = Manufacturer;