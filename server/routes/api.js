const express = require('express');
const passport = require("passport");
const LocalStrategy = require("passport-local");
const router = express.Router();

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
));

router.use('/news', require('./api/news'));
router.use('/admin', require('./api/admin'));
router.use('/users', require('./api/users'));


module.exports = router;
