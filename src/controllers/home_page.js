const select_all_goods = require('../database/queries/select_all_goods');
exports.get = (req, res) => {

  select_all_goods((err, result) => {
      if (err) return console.log(err);

      console.log(result);
      res.render('home_page', {
          goods: result,
          name: 'userName',
          profile: 'profile',
          script: '/home_dom.js'
        }
      });
  })
};
