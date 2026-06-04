"use strict";

// console.log("login.js loaded");
// console.log("login.js loaded successfully");

const id = document.querySelector("#id"), // id input 요소 선택
    pw = document.querySelector("#pw"), // pw input 요소 선택
    confirmPw = document.querySelector("#confirm-pw"), // confirm pw input 요소 선택
    registerBtn = document.querySelector("#login-btn"); // login 버튼 요소 선택

registerBtn.addEventListener("click", register);
function register() {  
  const req = {
    id: id.value,
    name: name.value,
    pw: pw.value,
    confirmPw: confirmPw.value,
  };
  console.log("Register request:", req);
  fetch("/register", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(req),
})
  .then((res) => res.json())
  .then((res) => {
    if (res.success) {
      location.href = "/"; // 등록 성공 시 홈 페이지로 이동

    } else {
      alert("Register failed: " + res.message); // 등록 실패 시 메시지 표시
    }
  })
  .catch((err) => {
    // console.error("Error during register:", err);
    console.error(new Error("Register error: " + err.message));
    alert("An error occurred during register. Please try again.");
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
