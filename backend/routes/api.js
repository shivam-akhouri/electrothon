const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Manufacturer = require('../models/manufacturer');
const Supplier = require('../models/supplier');
const Medicine = require('../models/medicine');
const QRCode = require('qrcode')
const bcrypt = require('bcrypt')

const users = []

// add a new user to the db IE SIGN UP
router.post('/users', (req, res, next) => {
    bcrypt.hash(req.body.password, 10).then(hash => {
        console.log(hash)
        const newuser = { email: req.body.email, password: hash }
        User.create(newuser).then((user) => {
            res.json(user);
            console.log(user.email, user.password)
        })
    }).catch(next);

});

// to check validity of pwd ie LOGIN
router.get('/users/login', (req, res, next) => {
    User.findOne({ email: req.body.email }).then((user) => {
        console.log(req.body.password, user.password)
        bcrypt.compare(req.body.password, user.password).then(valid => {
            if (valid) {
                res.send('Success')
                // res.json(user);
            } else {
                res.send('Not Allowed')
            }

        }).catch(next);

    }).catch(next);
});


// add a new mfg to the db MFG REGISTRATION
router.post('/manufacturers', (req, res, next) => {
    Manufacturer.create(req.body).then((manufacturer) => {
        res.json(manufacturer);
    }).catch(next);
});

// get a list of mfgs from the db
// router.get('/manufacturers', (req, res, next) => {
//     Manufacturer.find({}).then((manufacturers) => {
//         res.json(manufacturers);
//     });
// });

//get specific mfg using id
// router.get('/manufacturers/:id', (req, res, next) => {
//     Manufacturer.findOne({ _id: req.params.id }).then((manufacturer) => {
//         res.json(manufacturer);
//     }).catch(next);
// });

// add a new medicine to the db MEDICINE REGISTRATION
router.post('/medicines', (req, res, next) => {
    Medicine.create(req.body).then((medicine) => {
        res.json(medicine);
        console.log(medicine);
        let qrdata = JSON.stringify(medicine);
        console.log(qrdata);
        // Print the QR code to terminal
        QRCode.toString(qrdata, { type: 'terminal' }, function (err, QRcode) {
            if (err) return console.log("error occurred");
            // Printing the generated code
            console.log(QRcode);
            console.log("end");
            // res.sendFile(QRcode);
        })
    }).catch(next);
});

//get specific med using id
// router.get('/manufacturers/:id', (req, res, next) => {
//     Medicine.findOne({ _id: req.params.id }).then((medicine) => {
//         res.json(medicine);
//         // console.log(medicine);


//     }).catch(next);
// });

// add a new supplier to the db SUPPLIER REGISTRATION
router.post('/suppliers', (req, res, next) => {
    Supplier.create(req.body).then((supplier) => {
        res.json(supplier);
    }).catch(next);
});

module.exports = router;