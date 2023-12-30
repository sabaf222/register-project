"use strict";

var express = require('express');

var cors = require('cors');

var bodyParser = require('body-parser');

var sabzlearnDB = require('./db/dist/sabzlearnDB.dev');

var userRouters = require('./routes/userRouters');

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/users', userRouters);
app.listen(4000, function () {
  console.log('server run shod');
});