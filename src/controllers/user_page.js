const selectUserProfile = require('../database/queries/select_user_profile');

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
      selectUserProfile(decoded.userId, (err, result) => {
        if(err) return res.status(500); 
        res.render('user_page', {
          userGood: result,
          fullname: result[0].fullname,
          firstname: result[0].firstname,
          lastname: result[0].lastname,
          email: result[0].email,
          script: '/user_dom.js'
        });
      });
    }
  });

};
