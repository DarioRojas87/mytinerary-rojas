const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userControllers = {
  newUser: (req, res) => {
    const { name, lastName, email, password, photoUrl, country } = req.body;
    let hashedPass = bcryptjs.hashSync(password, 10);
    const newUser = new User({
      name,
      lastName,
      email,
      password: hashedPass,
      photoUrl,
      country,
    });

    User.findOne({ email: email })
      .then((user) => {
        if (user) {
          throw new Error("There is another user with that mail. Try again!");
        } else {
          newUser.save().then(() => {
            console.log("nuevo usuario creado");
            res.json({ success: true, response: newUser, error: null });
          });
        }
      })
      .catch((e) => {
        console.log("cayo en catch de crear nuevo usuario");
        res.json({ success: false, response: null, error: e.message });
      });
  },
  logUser: (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email: email })
      .then((user) => {
        if (!user) {
          throw new Error("Wrong Mail or/and Password, try again!");
        }
        let passMatch = bcryptjs.compareSync(password, user.password);
        if (!passMatch) {
          throw new Error("Wrong Mail or/and Password, try again!");
        }
        res.json({ success: true, response: user });
      })
      .catch((e) => {
        if (e.message.includes("Wrong")) {
          res.json({ success: false, dbError: false, error: e.message });
        } else {
          res.json({ success: false, dbError: true, error: e.message });
        }
      });
  },
};

module.exports = userControllers;
