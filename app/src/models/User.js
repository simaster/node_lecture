"use strict";

// const UserStorage = require("../../models/UserStorage");
// const { response } = require("express");
const UserStorage = require("./UserStorage");


class User {
  constructor(body) {
    this.body = body;
  }

  async login_user() {
    const client = this.body;
    // console.log(await UserStorage.getUserInfo(client.id)); // await는 promise가 resolve될 때까지 기다린다. async 함수 안에서만 사용할 수 있다.
    // const { id, pw } = await UserStorage.getUserInfo(client.id);

    try {
      const userInfo = await UserStorage.getUserInfo(client.id);
      if (!userInfo) {
        return { success: false, message: "아이디가 존재하지 않습니다." };
      }
      const { id, pw } = userInfo;
      
      
      // const { id, pw } = await UserStorage.getUserInfo(client.id);  
      if (id) {
        if (id === client.id && pw === client.pw) {
          return { success: true };
        }
        return { success: false, message: "비밀번호가 틀렸습니다." };
      }
      return { success: false, message: "아이디가 존재하지 않습니다." };
      
    } catch (err) {
      return { success: false, err };  //msg: err 비교
    }
  }

  async register_user() {
    const client = this.body;
    try {
      const response = await UserStorage.saver(client);
      return response;
    } catch (err) {
      return { success: false, err };
    }
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
module.exports = User;

