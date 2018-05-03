const select_all_goods = require('../database/queries/select_all_goods');
const insert_select_good = require('../database/queries/insert_select_good');

exports.get = (req, res) => {

  select_all_goods((err, result) => {
    if (err) return console.log(err);

    res.render('home_page', {
      goods: result,
      name: 'userName',
      profile: 'profile',
      script: '/home_dom.js'
    });
  })
};

exports.post = (req, res) => {

  insert_select_good(req.headers.id, 2, (err, result) => {
    if (err) return console.log(err);

    res.render('home_page', {
      script: '/home_dom.js'
    });
  })
};
