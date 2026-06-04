"use strict";

// const UserStorage = require("../../models/UserStorage");

const UserStorage = require("./UserStorage");


class User {
  constructor(body) {
    this.body = body;
  }

  async login_user() {
    const client = this.body;
    // console.log(await UserStorage.getUserInfo(client.id)); // await는 promise가 resolve될 때까지 기다린다. async 함수 안에서만 사용할 수 있다.
    const { id, pw } = await UserStorage.getUserInfo(client.id);

    if (id) {
      if (id === client.id && pw === client.pw) {
        return { success: true };
      }
      return { success: false, message: "비밀번호가 틀렸습니다." };
    }
      return { success: false, message: "아이디가 존재하지 않습니다." };
  }

  register_user() {
    const client = this.body;
    UserStorage.saver(client);
    const response = UserStorage.saver(client);
    return response;
    // return { success: true };
  }
  // register_user() {
  //   const body = this.body;
  //   const { id } = UserStorage.getUserInfo(this.body.id);
  //   if (id) {
  //     return { success: false, message: "이미 사용 중인 아이디입니다." };
  //   }
  //   UserStorage.saveUser(body);
  //   return { success: true };
  // }
}


// class User {
//   constructor(id, pw, name) {
//     this.id = id;
//     this.pw = pw;
//     this.name = name;
//   }
// }

module.exports = User;

