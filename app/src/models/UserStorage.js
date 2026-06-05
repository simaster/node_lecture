"use strict";

const db = require("../config/db");

class UserStorage {
  // static #getUserInfo(data, id) {
  //   const users = JSON.parse(data);
  //   const idx = users.id.indexOf(id);
  //   const userKeys = Object.keys(users); // => ["id", "pw", "name"]
  //   const userInfo = userKeys.reduce((newUser, info) => {
  //     newUser[info] = users[info][idx];
  //     return newUser;
  //   }, {});
  //   return userInfo;
  // }

  // static #getUsers(data, isAll, fields) {}
  // static getUsers(isAll, ...fields) {}

  static getUserInfo(id) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM users WHERE id = ?;";
      db.query(query ,[id] , (err, data) => {                  // db.query("SELECT * FROM users WHERE id = ?",[id] , (err, data) => {
        if (err) return reject(err);
        if (!data || data.length === 0) return resolve(null);
        // if (err) reject('${err}');  // error 를 문자열로 표시하는 경우 , 일반적으로 (err)
        // console.log(data[0])
        resolve(data[0]); 
      });
    });
  }

  static async saver(userInfo) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO users(id,name,pw) VALUES(?,?,?);";
      db.query(
        query ,
        [userInfo.id, userInfo.name, userInfo.pw] , 
        (err) => {                  // db.query("SELECT * FROM users WHERE id = ?",[id] , (err, data) => {
        if (err) reject('${err}'); // error 를 문자열로 표시하는 경우 , 일반적으로 (err)
        // console.log(data[0])
        resolve({success: true}); 
      });
    });
  }
}

module.exports = UserStorage;
