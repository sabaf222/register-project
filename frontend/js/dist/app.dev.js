"use strict";

// get all users
var wrapperUsers = document.querySelector('.user-wrap');
var wrapEditModal = document.querySelector('.modal-wrap');
var btnEdit = document.querySelector('.btn-edit');
var form = document.querySelector('form');
var fristnameInput = document.querySelector('#fristname');
var lastnameInput = document.querySelector('#lastname');
var usernameInput = document.querySelector('#username');
var passwordInput = document.querySelector('#password');
var userID = '';

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
          users.forEach(function (user) {
            wrapperUsers.insertAdjacentHTML('afterbegin', "   \n                    <div class=\"user\">\n                    <div class=\"btn-group\">\n                        <button onclick=\"removeUser('".concat(user.id, "')\" class=\"btn active\">\u062D\u0630\u0641 </button>\n                        <button onclick=\"editUser('").concat(user.id, "')\" class=\"btn \">\u0648\u06CC\u0631\u0627\u06CC\u0634</button>\n                    </div>\n\n                    <div class=\"direction-wrapper\">\n                        <div class=\"direction\">\n                            <h1 class=\"direction_title\">").concat(user.username, "</h1>\n                            <h2 class=\"direction_subtitle\">").concat(user.fristname, "_").concat(user.lastname, "</h2>\n\n                        </div>\n                        <img class=\"img-user\" src=\"../img/user1.png\" alt=\"\">\n                    </div>\n                    \n\n                </div>\n\n            "));
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
};

var removeUser = function removeUser(userID) {
  swal({
    title: "آیا می خواهید کاربر مورد نظر را حذف کنید",
    icon: "warning",
    buttons: ["نه", "آره"]
  }).then(function (result) {
    wrapperUsers.innerHTML = '';

    if (result) {
      fetch("http://localhost:4000/api/users/remove/".concat(userID), {
        method: 'DELETE'
      }).then(function (res) {
        console.log(res);
        res.json();

        if (res.ok) {
          swal({
            title: "کاربر مورد نظر با موفقیت حذف شد",
            icon: "success",
            button: "خیلی هم عالی"
          }).then(function () {
            getAndShowAllUsers();
          });
        }
      });
    }
  });
}; // form prevent


form.addEventListener('submit', function (event) {
  event.preventDefault();
});

var closeModal = function closeModal() {
  wrapEditModal.classList.remove('visible');
};

var emptyEditInput = function emptyEditInput() {
  fristnameInput.value = '', lastnameInput.value = '', usernameInput.value = '', passwordInput.value = '';
};

var editUser = function editUser(userID) {
  wrapEditModal.classList.add('visible');
  wrapperUsers.innerHTML = '';
  btnEdit.addEventListener('click', function () {
    var newUserInfos = {
      fristname: fristnameInput.value.trim(),
      lastname: lastnameInput.value.trim(),
      username: usernameInput.value.trim(),
      password: passwordInput.value.trim()
    };
    fetch("http://localhost:4000/api/users/edit/".concat(userID), {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUserInfos)
    }).then(function (res) {
      return res.json();
    }).then(function (data) {
      console.log(data);
      getAndShowAllUsers();
    });
    emptyEditInput();
    closeModal();
  });
}; // close modal


window.addEventListener('click', function (event) {
  console.log(event);

  if (event.target.className === 'container-modal') {
    closeModal();
  }
});
window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});
window.addEventListener('load', function () {
  getAndShowAllUsers();
});