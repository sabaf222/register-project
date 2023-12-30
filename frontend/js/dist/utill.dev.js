"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showSwal = void 0;

var showSwal = function showSwal(title, icon, buttons, callback) {
  showSwal({
    title: title,
    icon: icon,
    buttons: buttons
  }).then(function (result) {
    return callback(result);
  });
};

exports.showSwal = showSwal;