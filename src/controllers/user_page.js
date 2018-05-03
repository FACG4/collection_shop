const selectUserProfile = require('../database/queries/select_user_profile');
let userGood = [];
let stringiUserObj = '';

exports.get = (req, res) => {
  selectUserProfile(2, (err, result) => {

    stringiUserObj = JSON.stringify(result)
    userGood = JSON.parse(stringiUserObj);

    res.render('user_page', {
      userGood,
      fullname: userGood[0].fullname,
      firstname: userGood[0].firstname,
      lastname: userGood[0].lastname,
      email: userGood[0].email,
      script: '/user_dom.js'
    });
  });

};
