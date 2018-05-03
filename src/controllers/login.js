// const {validateUser} = require('../database/queries/index');

exports.get = (req, res) => {
  res.render('login', {title: 'Admin Page', cssPath: '/css/login.css'});

}

// function post (req, res, next) {
//   const data = {
//     body: req.body
//   };
//   validateUser(data, (err, user) => {
//     if (err) {
//       next(err);
//     } else {
//       res.redirect('/home_page');
//     }
//   });
// }
// /;

// function logout (req, res) {
//   res.redirect('/');
// }

// module.exports = {
//   logout
// };
