const express = require('express');
const router = express.Router();
const models = require('../../models/news');

router.get('', (request, response) => {
  response.send('response');
});

module.exports = router;
