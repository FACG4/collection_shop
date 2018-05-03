const express = require('express');
const path = require('path');
const router = express.Router();

const home = require('./home_page');
const signup = require('./signup');
const admin = require('./admin');
const login = require('./login');



const user_page = require('./user_page');
const error = require('./error');


router.get('/', home.get);
router.get('/signup',signup.get);
router.post('/signup',signup.post);
router.get('/user_page', user_page.get);


router.post('/admin',admin.post);
router.get('/admin', admin.get);


router.get('/login', login.get);
router.post('/login' , login.post);


// router.use(error.client);
// // router.use(error.server);





module.exports = router;
