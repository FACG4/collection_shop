const allGoods = require('../database/queries/select_all_goods');
let good = [];
let stringigoodObj = '';

exports.get = (req, res) => {
  allGoods((err, result) => {
    stringigoodObj = JSON.stringify(result)
    good = JSON.parse(stringigoodObj);

    res.render('home_page' , {good , name:'userName' , profile:'profile'});
  });
};
