const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// connect to mongodb & listen for requests
// const dbURI = "mongodb+srv://netninja:test1234@net-ninja-tuts-del96.mongodb.net/node-tuts";
const dbURI = 'mongodb+srv://swaathy:test1@trialcluster.2c3bh.mongodb.net/trial?retryWrites=true&w=majority';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => app.listen(3000))
    .catch(err => console.log(err));

app.use(bodyParser.json());

app.use('/api', require('./routes/api'));

app.use(function (err, req, res, next) {
    console.log(err); // to see properties of message in our console
    res.status(422).send({ error: err.message });
});
