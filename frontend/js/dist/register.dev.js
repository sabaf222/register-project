"use strict";

var fristNameInputElem = document.querySelector('#fristname');
var lastNameInputElem = document.querySelector('#lastname');
var userNameInputElem = document.querySelector('#username');
var passwordInputElem = document.querySelector('#password');
var registerBtn = document.querySelector('.btn');
var form = document.querySelector('form');

var registerUser = function registerUser() {
  var newUserInfos, res, result;
  return regeneratorRuntime.async(function registerUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          newUserInfos = {
            fristname: fristNameInputElem.value.trim(),
            lastname: lastNameInputElem.value.trim(),
            username: userNameInputElem.value.trim(),
            password: passwordInputElem.value.trim()
          };
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch("http://localhost:4000/api/users", {
            method: 'POST',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(newUserInfos)
          }));

        case 3:
          res = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(res.json());

        case 6:
          result = _context.sent;
          console.log(result);

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
};

form.addEventListener('submit', function (event) {
  event.preventDefault();
});
registerBtn.addEventListener('click', function () {
  registerUser();
});