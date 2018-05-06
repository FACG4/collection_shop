const select_all_goods = require('../database/queries/select_all_goods');
const insert_select_good = require('../database/queries/insert_select_good');
const jwt = require('jsonwebtoken');
const {
  parse
} = require('cookie');

exports.get = (req, res) => {
  const {
    accessToken
  } = parse(req.headers.cookie);
  jwt.verify(accessToken, process.env.JWT_KEY, (err, decoded) => {
    if (err) return console.log(err);
    else {

      select_all_goods((err, result) => {
        if (err) return res.status(500);
        res.render('home_page', {
          goods: result,
          name: decoded.username,
          profile: 'profile',
          script: '/home_dom.js',
          err: res.err
        });
      })
    }
  })
};

exports.post = (req, res) => {
  const {
    accessToken
  } = parse(req.headers.cookie);
  jwt.verify(accessToken, process.env.JWT_KEY, (err, decoded) => {
    if (err) return console.log(err);

    else {
      insert_select_good(req.headers.id, decoded.userId, (err, result) => {
        if (err) return res.status(500);

        res.render('home_page', {
          script: '/home_dom.js'
        });
      })
    }
  })
};
