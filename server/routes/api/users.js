const express = require('express');
const router = express.Router();
const model = require('../../models/admins');
const helpers = require('../../helpers');
const passport = require('passport');

router.get('', (request, response) => {
  response.send('users');
});

router.post('/login', (request, response) => {

  let params = request.query;

  if(!helpers.exists(params.username) && !helpers.exists(params.password)) {
    response.send(helpers.api_error('Invalid parameters'));
    response.end();
    return;
  }

  model.findOne({username: params.username}, (err, data) => {
    if (err) {
      response.send(helpers.api_error(err, 200));
    } else {
      response.send(helpers.api_response(data));
    }
  });
});

module.exports = router;
