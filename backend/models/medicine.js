const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create medicine Schema & model
const MedicineSchema = new Schema({
    mfgID: {
        type: String,
        required: [true, 'mfgName??? field is required'],
    },
    name: {
        type: String,
        required: [true, 'name field is required'],
    },
    mfgDate: {
        type: Date,
        required: [true, 'mfgDate field is required'],
    },
    expDate: {
        type: Date,
        required: [true, 'expDate field is required'],
    },
    dosage: {
        type: String,
        required: [true, 'Dosage field is required'],
    },
    batchNo: {
        type: Number,
        required: [true, 'batchNo field is required'],
    }
});

const Medicine = mongoose.model('medicine', MedicineSchema);

module.exports = Medicine;