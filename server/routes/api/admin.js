const express = require('express');
const router = express.Router();
const model = require('../../models/admins');
const helpers = require('../../helpers');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../../config/config');

router.get('', (request, response) => {
  response.send('Admins');
});

router.post('/register', (request, response) => {
  let params = request.query;

  if(
      !helpers.exists(params.username) &&
      !helpers.exists(params.password) &&
      !helpers.exists(params.name) &&
      !helpers.exists(params.email)
    ) {
    response.send(helpers.api_error('Invalid parameters'));
    response.end();
    return;
  }

  let admin = new model({
    name: params.name,
    username: params.username,
    password: params.password,
    email: params.email,
    activated: true,
    'access_level.admin': true
  });

  admin.save();

  response.json(helpers.api_response(admin));

});




router.post('/login', (request, response) => {
  let params = request.query;

  if(!helpers.exists(params.username) && !helpers.exists(params.password)) {
    response.send(helpers.api_error('Invalid parameters'));
    response.end();
    return;
  }
  model.byUsername(params.username, (err, user) => {
    if (err) {
      response.json(helpers.api_error(err, 200));
    } else if(!user) {
      response.json(helpers.api_error('No User'));
    }else {
      model.comparePass(params.password, user.password, (err, isMatch) => {
        if(err)
          throw err;
        if(isMatch) {
          const token = jwt.sign(user, config.secret, {expiresIn: 3600});
          response.json(helpers.api_response({token: `JWT ${token}`, user: user}));
        }else {
          response.json(helpers.api_error('Incorrect Password'));
        }
      });
    }
  });
});

router.get('/profile', passport.authenticate('jwt', {session: false}), (request, response) => {
  response.json(helpers.api_response(request.user));
});

module.exports = router;
