"use strict";

var express = require('express');

var sabzlearnDB = require('../db/sabzlearnDB');

var userRouters = express.Router();
userRouters.post('/', function (req, res) {
  var body = req.body;
  var date = new Date().toLocaleDateString('fa-IR');
  console.log('conect shod');
  var newUserInfoQuery = "INSERT INTO users VALUES (NULL,\"".concat(body.fristname, "\",\"").concat(body.lastname, "\",\"").concat(body.username, "\",\"").concat(body.password, "\",\"").concat(date, "\")");
  sabzlearnDB.query(newUserInfoQuery, function (error, result) {
    if (error) {
      console.log('you have error', error);
      res.send(null);
    } else {
      console.log('1 user insert');
      res.send(true);
    }
  });
});
userRouters.get('/all', function (req, res) {
  console.log('conect shod');
  var newUserInfoQuery = "SELECT * FROM users";
  sabzlearnDB.query(newUserInfoQuery, function (error, result) {
    if (error) {
      console.log('you have error', error);
      res.send(null);
    } else {
      console.log('1 user insert');
      res.send(JSON.stringify(result));
    }
  });
});
userRouters["delete"]('/remove/:userID', function (req, res) {
  var userID = req.params.userID;
  console.log('conect shod');
  var deleteUserInfoQuery = "DELETE FROM users WHERE id=".concat(userID);
  sabzlearnDB.query(deleteUserInfoQuery, function (error, result) {
    if (error) {
      console.log('you have error', error);
      res.send(null);
    } else {
      console.log('1 user delete');
      res.send(JSON.stringify(result));
    }
  });
});
userRouters.put('/edit/:userID', function (req, res) {
  var userID = req.params.userID;
  var body = req.body;
  var updateUserInfoQuery = "UPDATE users SET fristname='".concat(body.fristname, "',lastname='").concat(body.lastname, "',username='").concat(body.username, "',password='").concat(body.password, "' WHERE id=").concat(userID);
  sabzlearnDB.query(updateUserInfoQuery, function (error, result) {
    if (error) {
      console.log('you have error', error);
      res.send(null);
    } else {
      console.log('1 user delete');
      res.send(JSON.stringify(result));
    }
  });
});
module.exports = userRouters;