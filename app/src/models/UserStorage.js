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
  }
  
//   getUserById(id) {
//     return this.users.find(user => user.id === id);
//   }

//   validateUser(id, pw) {
//     const user = this.getUserById(id);
//     return user && user.pw === pw;
//   }


module.exports = UserStorage;
