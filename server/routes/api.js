const express = require('express');
const router = express.Router();

//API SETUP
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';


router.get('/', (request, response) => {
  response.send('API Works');
});

router.get('/news', (request, response) => {
  axios.get(`${API}/posts`)
    .then(posts => {
      response.status(200).json(posts.data);
    }).catch(error => {
    response.status(500).send(error);
  });
});

router.get('/work', (request, response) => {
  let models = require('../models');
  let admin = new models.Admin.findById(0);

  admin.save(function (error) {
    if (error) {
      response.send(error);
    } else {
      response.send('added');
    }
  });

});


module.exports = router;
