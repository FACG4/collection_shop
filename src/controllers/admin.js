const insertproducts = require('../database/queries/insert_products')

exports.get = (req, res) => {
  res.render('admin')

};

exports.post = (req, res) => {
  const {
    goodsName,
    imgUrl,
    price,
    description
  } = req.body;
  insertproducts.insertProducts(goodsName, imgUrl, price, description, (err, result) => {
    if (err) return console.log(err);
    res.render('admin' ,{script:'/admin_dom.js'});
  })
};
