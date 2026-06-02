"use strict";

// const UserStorage = require("../../models/UserStorage");
const User = require("../../models/User");


const output = {
  c_home: (req, res) => {
    res.render('home/index');
  },                                 // 객체이니까 ,로 구분하여 여러 함수를 정의할 수 있다.
  c_login: (req, res) => {
    res.render('home/login');
  }
};

const process = {
  loginPost: (req, res) => {

    // const id = req.body.id;
    // const pw = req.body.pw;   

    const user = new User(req.body);
    const response = user.login_user();
    console.log(response);
    return res.json(response);
  }
};

module.exports = {
  output,
  process
};
