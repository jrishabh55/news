const JwtStrategy = require('passport-jwt').Strategy;
const JwtExtract = require('passport-jwt').ExtractJwt;
const Admin = require('../models/admins');
const config = require('./config');

module.exports = (passport) => {
  let opts = {};
  opts.jwtFromRequest = JwtExtract.fromAuthHeader();
  opts.secretOrKey = config.secret;

  passport.use(new JwtStrategy(opts, (payload, done) => {
    Admin.byId(payload._doc._id, (err, user) => {
      if (err)
        return done(err, false);
      else if(user)
        return done(null, user);
      else
        return done(null, false);
    });
  }));
}
