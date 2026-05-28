"use strict";

const c_home  = (req, res) => {
  res.render('home/index');
}

const c_login = (req, res) => {
  res.render('home/login');
}

module.exports = {
  home: c_home,
  login: c_login,
};
