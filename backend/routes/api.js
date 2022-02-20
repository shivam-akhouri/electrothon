const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Manufacturer = require('../models/manufacturer');
const Supplier = require('../models/supplier');
const Medicine = require('../models/medicine');

// add a new user to the db
router.post('/users', (req, res, next) => {
    User.create(req.body).then((user) => {
        res.json(user);
    }).catch(next);
});

// add a new mfg to the db
router.post('/manufacturers', (req, res, next) => {
    Manufacturer.create(req.body).then((manufacturer) => {
        res.json(manufacturer);
    }).catch(next);
});

// get a list of mfgs from the db
router.get('/manufacturers', (req, res, next) => {
    Manufacturer.find({}).then((manufacturers) => {
        res.json(manufacturers);
    });
});

//get specific mfg using id
router.get('/manufacturers/:id', (req, res, next) => {
    Manufacturer.findOne({ _id: req.params.id }).then((manufacturer) => {
        res.json(manufacturer);
    }).catch(next);
});

// add a new medicine to the db
router.post('/medicines', (req, res, next) => {
    Medicine.create(req.body).then((medicine) => {
        res.json(medicine);
        console.log(medicine);
    }).catch(next);
});

//get specific med using id
router.get('/manufacturers/:id', (req, res, next) => {
    Medicine.findOne({ _id: req.params.id }).then((medicine) => {
        res.json(medicine);
        // console.log(medicine);
    }).catch(next);
});

// add a new supplier to the db
router.post('/suppliers', (req, res, next) => {
    Supplier.create(req.body).then((supplier) => {
        res.json(supplier);
    }).catch(next);
});

module.exports = router;