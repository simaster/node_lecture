"use strict";

const UserStorage = require("../../models/UserStorage");

const output = {
  c_home: (req, res) => {
    res.render('home/index');
  },                                 // 객체이니까 ,로 구분하여 여러 함수를 정의할 수 있다.
  c_login: (req, res) => {
    res.render('home/login');
  }
};

// const users = {
//   id: ["admin", "user1", "user2", "1"],
//   pw: ["1234", "1234", "1234", "1"]
// }

const process = {
  loginPost: (req, res) => {
    const id = req.body.id;
    const pw = req.body.pw;
    // const name = req.body.name;
    // const userStorage = new UserStorage();
    console.log(UserStorage.getUsers("id", "pw", "name"));
    const users = UserStorage.getUsers("id", "pw");
    
    // console.log(UserStorage.getUsers());
    // console.log(UserStorage.getUsers(...fields));  

    // UserStorage.getUsers("id","pw");

    const response = {};
    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.pw[idx] === pw) {
        response.success = true;
        return res.json(response);
      }
    }
    response.success = false;
    response.message = "Invalid credentials";
    return res.json(response); 

    // if (users.id.includes(id)) {
    //   const idx = users.id.indexOf(id);
    //   if (users.pw[idx] === pw) {
    //     console.log("Login successful for id:", id);
    //     res.json({ success: true, message: "Login successful" });
    //   }

    //   else {
    //     console.log("Login failed for id:", id);
    //     res.status(401).json({ success: false, message: "Invalid credentials" });
    //   }
    // }

  }
};

module.exports = {
  output,
  process
};
