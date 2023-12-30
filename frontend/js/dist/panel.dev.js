"use strict";

// get all users
var getAndShowAllUsers = function getAndShowAllUsers() {
  var res, users;
  return regeneratorRuntime.async(function getAndShowAllUsers$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("http://localhost:4000/api/users/all"));

        case 2:
          res = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(res.json());

        case 5:
          users = _context.sent;
          console.log(users);
          users.forEach(function (user) {});

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
};

window.addEventListener('load', function () {
  getAndShowAllUsers();
});