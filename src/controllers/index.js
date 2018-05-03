const express = require('express');
const path = require('path');
const router = express.Router();

const home = require('./home');
const login = require('./login')

router.get('login', login.get)
router.get('/', home.get);


module.exports = router;
