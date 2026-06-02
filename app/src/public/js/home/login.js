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
  fetch("/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(req),
})
  .then((res) => res.json())
  .then((res) => {
    if (res.success) {
      location.href = "/"; // 로그인 성공 시 홈 페이지로 이동

    } else {
      alert("Login failed: " + res.message); // 로그인 실패 시 메시지 표시
    }
  })
  .catch((err) => {
    // console.error("Error during login:", err);
    console.error(new Error("Login error: " + err.message));
    alert("An error occurred during login. Please try again.");
  });

  // .then((res) => console.log(res));
  // .then(console.log);
}





// const loginBtn = document.querySelector("#login-btn"); // login 버튼 요소 선택
// loginBtn.addEventListener("click", function() {
//     console.log("Login button clicked");}
// );

// console.log("id:", id);
// console.log(id);
// console.log("pw:", pw);
// console.log("loginBtn:", loginBtn);
