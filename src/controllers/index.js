const express = require('express');
const path = require('path');
const router = express.Router();

const home = require('./home');
const user_profile = require('./user_page');

router.get('/', home.get);
router.get('/user_profile', user_profile.get);


module.exports = router;
