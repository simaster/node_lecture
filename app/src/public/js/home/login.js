"use strict";

// console.log("login.js loaded");
// console.log("login.js loaded successfully");

const id = document.querySelector("#id"); // id input 요소 선택
    // pw = document.querySelector("#pw"); // pw input 요소 선택
    // loginBtn = document.querySelector("#login-btn"); // login 버튼 요소 선택

const pw = document.querySelector("#pw"); // pw input 요소 선택
const loginBtn = document.querySelector("#login-btn"); // login 버튼 요소 선택

loginBtn.addEventListener("click", login);
function login() {  
  const req = {
    id: id.value,
    pw: pw.value,
  };
  console.log("Login request:", req);
}



// const loginBtn = document.querySelector("#login-btn"); // login 버튼 요소 선택
// loginBtn.addEventListener("click", function() {
//     console.log("Login button clicked");}
// );

// console.log("id:", id);
// console.log(id);
// console.log("pw:", pw);
// console.log("loginBtn:", loginBtn);
