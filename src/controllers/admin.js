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
    if (err) return res.status(500); 
    res.render('admin');
  })
};
