// const {validateUser} = require('../database/queries/index');

// function get (req, res) {
//   res.render('login', {title: 'Admin Page', cssPath: '/css/login.css'});
// }
exports.get = (req, res) => {
    res.render('login', {title: 'Admin Page', cssPath: '/css/style.css'});
  };
  //
// function post (req, res, next) {
//   const data = {
//     body: req.body
//   };
//   validateUser(data, (err, admin) => {
//     if (err) {
//       next(err);
//     } else {
//       res.redirect('/home_page');
//     }
//   });
// }
//
// function logout (req, res) {
//   res.redirect('/');
// }
//
// module.exports = {
//   get,
//   post,
//   logout
// };
