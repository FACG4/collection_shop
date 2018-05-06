const check_auth = require('../database/queries/check_auth')

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookie = require('cookie');
const {
  parse
} = require('cookie');


exports.get = (req, res) => {
  res.render('login');
};

exports.post = (req, res) => {

  check_auth.checkuser(req.body.email, (err, result) => {
    if (!result.length) {
      res.send('invalid email');
    } else {
      console.log(result[0].hashpassword);
      console.log(req.body.password);
      bcrypt.compare(req.body.password, result[0].hashpassword, (errr, response) => {
        console.log(response);
        if (err) throw new Error(errr, 'compare');
        if (!response) {
          res.send('invalid password');
        } else {
          const secret = process.env.JWT_KEY;
          const token = jwt.sign({
            userId: result[0].id,
            username: result[0].firstname + ' ' + result[0].lastname
          }, secret);
          res.cookie('accessToken', token);
          res.redirect('/');
        }
      });
    }
  })
};
