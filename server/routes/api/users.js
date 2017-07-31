const express = require('express');
const router = express.Router();
const models = require('../../models');

router.get('', (request, response) => {
  response.send('response');
});

module.exports = router;
