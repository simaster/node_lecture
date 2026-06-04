"use strict";

// console.log("login.js loaded");
// console.log("login.js loaded successfully");

const id = document.querySelector("#id"), // id input 요소 선택
    name = document.querySelector("#name"), // name input 요소 선택
    pw = document.querySelector("#pw"), // pw input 요소 선택
    confirmPw = document.querySelector("#confirm-pw"), // confirm pw input 요소 선택
    registerBtn = document.querySelector("#login-btn"); // login 버튼 요소 선택

registerBtn.addEventListener("click", register);

function register() {
  if (!id.value) return alert("아이디를 입력해주십시오.");
  if (pw.value !== confirmPw.value)
    return alert("비밀번호가 일치하지 않습니다.");

  const req = {
    id: id.value,
    name: name.value,
    pw: pw.value,
  };

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
        location.href = "/login";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error("회원가입 중 에러 발생");
    });

// function register() {  
//   if (!id.value || !name.value || !pw.value || !confirmPw.value) {
//     alert("Please fill in all fields.");
//     return;
//   }
  
//   if (pw.value !== confirmPw.value) {   // 비밀번호와 확인 비밀번호가 일치하지 않는 경우, .value const로 선언하기 전에 사용  
//     alert("Passwords do not match.");
//     return;
//   }

//   const req = {
//     id: id.value,
//     name: name.value,
//     pw: pw.value,
//     // confirmPw: confirmPw.value,
//   };
//   console.log("Register request:", req);

//   fetch("/register", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(req),
// })
//   .then((res) => res.json())
//   .then((res) => {
//     if (res.success) {
//       location.href = "/login"; // 등록 성공 시 로그인 페이지로 이동

//     } else {
//       alert("Register failed: " + res.message); // 등록 실패 시 메시지 표시
//     }
//   })

//   .catch((err) => {
//     // console.error("Error during register:", err);
//     console.error(new Error("Register error: " + err.message));
//     alert("An error occurred during register. Please try again.");
//   });

//   // .then((res) => console.log(res));
//   // .then(console.log);
}


