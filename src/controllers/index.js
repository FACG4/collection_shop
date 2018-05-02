const express = require('express');
const path = require('path');
const router = express.Router();

const home = require('./home_page');
const signup = require('./signup');


router.get('/', home.get);
router.get('/signup',signup.get);
router.post('/signup',signup.post);

module.exports = router;