const express = require('express');
const passport = require("passport");
const router = express.Router();


router.use('/news', require('./api/news'));
router.use('/admin', require('./api/admin'));
router.use('/users', require('./api/users'));


module.exports = router;
