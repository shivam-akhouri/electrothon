const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create supplier Schema & model
const SupplierSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required'],
    },
    mfgTieUp: {
        type: String,
        required: [true, 'manufacturer tied up with field is required'],
    },
    email: {
        type: String,
        required: [true, 'email field is required'],
    },
    address: {
        type: String,
        required: [true, 'address field is required'],
    },
    postalCode: {
        type: Number,
        required: [true, 'postalCode field is required'],
    },
    phoneNo: {
        type: Number,
        required: [true, 'phoneNo field is required'],
    },
    license: {
        type: String,
        required: [true, 'license field is required'],
    }
});

const Supplier = mongoose.model('supplier', SupplierSchema);

module.exports = Supplier;