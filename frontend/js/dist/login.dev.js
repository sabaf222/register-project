"use strict";

var _require = require("console"),
    log = _require.log;

var nameInputElem = document.querySelector('#name');
var usernameInputElem = document.querySelector('#username');
var passwordInputElem = document.querySelector('#password');
var registerBtn = document.querySelector('login-btn');

var login = function login() {
  var newUserInfos = {
    name: nameInputElem.value.trim(),
    username: usernameInputElem.value.trim(),
    password: passwordInputElem.value.trim()
  };
  fetch("localhost:3000/api/user/login", {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newUserInfos)
  }).then(function (res) {
    return res.json();
  }).then(function (data) {
    console.log(data);
  });
};

loginBtn.addEventListener('click', function (event) {
  event.preventDefault();
});