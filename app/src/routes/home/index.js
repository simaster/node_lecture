"use strict";

const express = require('express');
const router = express.Router();

// // const { hello, login } = ctrl;  

// 홈 페이지 라우터
// router.get('/', (req, res) => {
// // res.send('Hello World!');
//   res.render('views/home/index');
// });


const ctrl = require('./home.ctrl');

router.get('/', ctrl.output.c_home);
router.get('/login', ctrl.output.c_login);
router.get('/register', ctrl.output.c_register);
router.post('/login', ctrl.process.loginPost);


// router.get('/login', (req, res) => {
// //   res.send('Login Page');
//   res.render('views/home/login');
// });

module.exports = router;