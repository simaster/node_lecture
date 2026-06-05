
"use strict";

// 모듈
const express = require('express');
const bodyparser = require('body-parser');
const dotenv = require("dotenv");
const morgan = require('morgan');
// const fs = require("fs");
const path = require('path');

// 앱 port
const app = express();
dotenv.config();
// load .env from repository root (project root is one level up from this app folder)
// dotenv.config({ path: path.join(__dirname, '../.env') });
// const port = 3000; 
const accessLogStream = require("./src/config/log");

// 라우팅
// const home = require('./src/routes/home'); // 라우터 등록
const root = require('./src/routes/home'); // 라우터 등록

// const accessLogStream = fs.createWriteStream(
//     `${__dirname}/log/access.log`,
//     // path.join(__dirname, 'log', 'access.log'),
//     { flags: 'a' }
// );

// 앱 세팅
//app.set('views', __dirname + '/views');
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(express.static(`${__dirname}/src/public`)); 
// 정적 파일 제공을 위한 미들웨어입니다. __dirname은 현재 파일의 디렉토리 경로를 나타냅니다. 따라서, src/public 디렉토리에 있는 정적 파일들을 제공할 수 있게 됩니다.
app._router = express.Router(); 
// 라우터 객체를 생성합니다. 라우터는 요청 URL과 HTTP 메서드에 따라 적절한 핸들러 함수를 실행하는 역할을 합니다.

app.use(bodyparser.json()); // JSON 형식의 요청 본문을 파싱하는 미들웨어입니다. 클라이언트가 JSON 데이터를 전송할 때, 이 미들웨어를 사용하여 요청 본문을 JavaScript 객체로 변환할 수 있습니다.
app.use(bodyparser.urlencoded({ extended: true })); // URL-encoded 형식의 요청 본문을 파싱하는 미들웨어입니다. 클라이언트가 HTML 폼 데이터를 전송할 때, 이 미들웨어를 사용하여 요청 본문을 JavaScript 객체로 변환할 수 있습니다. extended: true 옵션은 중첩된 객체를 허용하도록 설정합니다. 
app.use(
    morgan(":method :date[web]", { stream: accessLogStream})  //:method :date[format] , "dev" , web, clf, iso
    // morgan("combined")  
        // morgan(":method :url :status :res[content-length] - :response-time ms")
);
app.use(morgan("dev"));
app.use(morgan("common",{ stream: accessLogStream}));

app.use("/", root); // use()는 미들웨어를 등록하는 메서드입니다. 미들웨어는 요청과 응답 사이에서 실행되는 함수입니다. 예를 들어, body-parser 미들웨어를 사용하여 요청 본문을 파싱할 수 있습니다.

module.exports = app;


