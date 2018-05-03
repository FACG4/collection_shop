const selectUserProfile = require('../database/queries/select_user_profile');

exports.get = (req, res) => {
  selectUserProfile(2, (err, result) => {

    res.render('user_page', {
      userGood:result,
      fullname: userGood[0].fullname,
      firstname: userGood[0].firstname,
      lastname: userGood[0].lastname,
      email: userGood[0].email,
      script: '/user_dom.js'
    });
  });

};
