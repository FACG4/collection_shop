  const insertuster = require('../database/queries/insert_user')
  const bcrypt = require('bcrypt');

  exports.get = (req, res) => {
    res.render('signup', {
      script: '/signup_dom.js'
    });
  };

  exports.post = (req, res) => {
    const {
      fullname,
      fname,
      lname,
      email,
      password
    } = req.body;


    insertuster.insertUsers(fullname, fname, lname, email, password, (err, result) => {
      if (err) return res.status(500);
      res.render('login');
    })
  };
