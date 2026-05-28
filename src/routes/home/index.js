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

router.get('/', ctrl.home);
router.get('/login', ctrl.login);


// router.get('/login', (req, res) => {
// //   res.send('Login Page');
//   res.render('views/home/login');
// });

module.exports = router;