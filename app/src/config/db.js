"use strict";

const mysql = require("mysql2");

// const db = mysql.createConnection({
// host: "localhost",
// user: "root",
// password: "8227",
// database: "login_lecture",
// })



const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    // use DB_PASSWORD env var (fix typo DB_PSWORD)
    password: process.env.DB_PSWORD,
    database: process.env.DB_DATABASE,
    // Port: process.env.DB_PORT,
});

// console.log(DB_HOST)

// console.log(db)
db.connect();

module.exports = db;

