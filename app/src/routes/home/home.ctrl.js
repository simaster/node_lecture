"use strict";

// const UserStorage = require("../../models/UserStorage");
const User = require("../../models/User");
const logger = require("../../config/logger");

const output = {
  c_home: (req, res) => {
    logger.info('GET / home "홈 화면으로 이동"');
    res.render('home/index');
  },                                 // 객체이니까 ,로 구분하여 여러 함수를 정의할 수 있다.
  c_login: (req, res) => {
    logger.info('GET / login "login 화면으로 이동"');
    res.render('home/login');
  },
  c_register: (req, res) => {
    logger.info('GET / register "register 화면으로 이동"');
    res.render('home/register');
  }
};

const process = {
  loginPost: async (req, res) => {           // async는 함수 앞에서 ...
    const user = new User(req.body);
    const response = await user.login_user();
    if (response.err)
      logger.error(`POST / login 200 Response: "success: ${response.success}, msg: ${response.err}"`)
    else
      logger.info(
        `POST / login 200 Response: "success: ${response.success}, msg: ${response.msg}"`
      );
    console.log(response);
    return res.json(response);
  },

  registerPost: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register_user();
    // console.log(response);
    if (response.err)
      logger.error(`POST / login 200 Response: "success: ${response.success}, msg: ${response.err}"`)
    else
      logger.info(
        `POST / register 200 Response: "success: ${response.success}, msg: ${response.msg}"`
      );
    return res.json(response);
  }

};

module.exports = {
  output,
  process
};
