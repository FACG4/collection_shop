const insertproducts=require('../database/queries/insert_products')
exports.get = (req, res) => {
  res.render('admin')
  
};


exports.post = (req, res) => {
  // res.render('home_page', { activePage: { home: true } });
  const {goodsName,imgUrl, price, description} = req.body;
  insertproducts.insertProducts(goodsName,imgUrl, price, description,(err,result)=>{
      if (err) return console.log(err);
   res.render('admin');

      
  })

  
  
};
