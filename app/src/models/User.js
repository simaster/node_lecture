"use strict";

// const UserStorage = require("../../models/UserStorage");

const UserStorage = require("./UserStorage");


class User {
  constructor(body) {
    this.body = body;
  }

  login_user() {
    // const { id, pw } = UserStorage.getUsers("id", "pw");
    // const a = UserStorage.getUserInfo("1");
    const body = this.body;
    const { id, pw } = UserStorage.getUserInfo(this.body.id);
    // console.log(a);
    if (id) {
      if (id === body.id && pw === body.pw) {
        return { success: true };
      }
      return { success: false, message: "비밀번호가 틀렸습니다." };
    }
      return { success: false, message: "아이디가 존재하지 않습니다." };

  }
}


// class User {
//   constructor(id, pw, name) {
//     this.id = id;
//     this.pw = pw;
//     this.name = name;
//   }
// }

module.exports = User;

