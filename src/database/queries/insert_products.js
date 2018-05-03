
const db_connection = require('../db_connection');



const   insertProducts= (goodsName,imgUrl, price, description, cb) => {


  console.log(goodsName,imgUrl, price, description ,'dfgbjjjjjjjjjjjhnjkml');
  
  let sql = {
    text: 'INSERT INTO goods (goodsName,imgUrl, price, description) VALUES ($1, $2, $3 ,$4)',
    values: [goodsName,imgUrl, price, description]
  };
  db_connection.query(sql, (err, res) => {

    if (err) {
      return cb(err);
    } else {
      cb(null, res)
    }
  });

};

module.exports = {
  insertProducts
};



