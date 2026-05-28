
"use strict";

// 모듈
const express = require('express');
const app = express();
const port = 3000; 

const root = require('./src/routes/home'); // 라우터 등록

// 앱 세팅
//app.set('views', __dirname + '/views');
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(express.static(`${__dirname}/src/public`)); // 정적 파일 제공을 위한 미들웨어입니다. __dirname은 현재 파일의 디렉토리 경로를 나타냅니다. 따라서, src/public 디렉토리에 있는 정적 파일들을 제공할 수 있게 됩니다.


app.use("/", root); // use()는 미들웨어를 등록하는 메서드입니다. 미들웨어는 요청과 응답 사이에서 실행되는 함수입니다. 예를 들어, body-parser 미들웨어를 사용하여 요청 본문을 파싱할 수 있습니다.

module.exports = app;


