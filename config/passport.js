const passport = require("passport");
const jwtStrategy = require("passport-jwt").Strategy;
const extractJwt = require("passport-jwt").ExtractJwt;
const User = require("../models/User");
require("dotenv").config();

module.exports = passport.use(
  new jwtStrategy(
    {
      jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRETORKEY,
    },
    (payload, done) => {
      console.log(payload);
      User.findOne({ _id: payload._doc._id })
        .then((response) => {
          if (!response) {
            return done(null, false); //no hay error pero tampoco usuario
          } else {
            return done(null, response); //no hay error y SI hay usuario
          }
        })
        .catch((error) => {
          done(error, false);
        }); //hay error porque no se pudo conectar con base de datos
    }
  )
);
