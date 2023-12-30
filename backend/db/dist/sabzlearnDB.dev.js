"use strict";

var mysql = require('mysql');

var sabzlearnDB = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'sabzlearn'
});
module.exports = sabzlearnDB;