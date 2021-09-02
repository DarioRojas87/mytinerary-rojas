const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userControllers = {
  newUser: (req, res) => {
    const { name, lastName, email, password, photoUrl, country, google } =
      req.body;
    let hashedPass = bcryptjs.hashSync(password, 10);
    const newUser = new User({
      name,
      lastName,
      email,
      password: hashedPass,
      photoUrl,
      country,
      google,
    });

    User.findOne({ email: email })
      .then((user) => {
        if (user) {
          throw new Error("There is another user with that mail. Try again!");
        } else {
          newUser.save().then(() => {
            const token = jwt.sign({ ...newUser }, process.env.SECRETORKEY);
            res.json({
              success: true,
              response: {
                name: newUser.name,
                photoUrl: newUser.photoUrl,
                token,
              },
              error: null,
            });
          });
        }
      })
      .catch((e) => {
        res.json({ success: false, response: null, error: e.message });
      });
  },
  logUser: (req, res) => {
    const { email, password, flagGoogle } = req.body;
    User.findOne({ email: email })
      .then((user) => {
        if (!user && flagGoogle) {
          throw new Error(
            "You dont' have an account with Google, please create one first"
          );
        }
        if (!user) {
          throw new Error("Wrong Mail or/and Password, try again!");
        }
        if (user.google && !flagGoogle) {
          throw new Error(
            "You created an account with Google, please sign in with it"
          );
        }
        let passMatch = bcryptjs.compareSync(password, user.password);
        if (!passMatch) {
          throw new Error("Wrong Mail or/and Password, try again!");
        }
        const token = jwt.sign({ ...user }, process.env.SECRETORKEY);
        res.json({
          success: true,
          response: {
            name: user.name,
            photoUrl: user.photoUrl,

            token,
          },
        });
      })
      .catch((e) => {
        if (e.message.includes("Wrong")) {
          res.json({ success: false, dbError: false, error: e.message });
        } else if (e.message.includes("first")) {
          res.json({ success: false, dbError: false, error: e.message });
        } else if (e.message.includes("Google")) {
          res.json({ success: false, dbError: false, error: e.message });
        } else {
          res.json({ success: false, dbError: true, error: e.message });
        }
      });
  },
  checkToken: (req, res) => {
    res.json({
      response: { name: req.user.name, photoUrl: req.user.photoUrl },
    });
  },
};

module.exports = userControllers;
