"use strict";

class UserStorage {
  static #users = {
    id: ["admin", "user1", "user2", "1"],
    pw: ["1234", "1234", "1234", "1"],
    name: ["관리자", "사용자1", "사용자2", "1"]
  };
  // static getUsers() {
  //   return this.#users;
  // }

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
        // console.log(newUsers, field);
        if (users.hasOwnProperty(field)) {
            newUsers[field] = users[field];
        }        
        return newUsers;
    }, {});
    // console.log(newUsers);
    return newUsers;
    }
 
    static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const userKeys = Object.keys(users); // => ["id", "pw", "name"]
    const userInfo = userKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }

  static saver(userInfo) {
    const users = this.#users;
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.pw.push(userInfo.pw);
    console.log(users);
    return { success: true };
  }
}
  



module.exports = UserStorage;
