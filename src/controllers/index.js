const express = require('express');
const path = require('path');
const router = express.Router();

const home = require('./home_page');
const signup = require('./signup');
const admin = require('./admin');

const user_page = require('./user_page');
const error = require('./error');


router.get('/', home.get);
router.get('/signup',signup.get);
router.post('/login',signup.post);
router.get('/user_page', user_page.get);


router.post('/admin',admin.post);
router.get('/admin', admin.get);

router.use(error.client);
router.use(error.server);





module.exports = router;
