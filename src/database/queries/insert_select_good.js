const db_connection = require('../db_connection');

const insertGoodsToUser = (goodId, userId, cb) => {

  let sql = {
    text: `INSERT INTO userGoods (userId,goodsId) VALUES ($1, $2)`,
    values: [userId, goodId]
  };

  db_connection.query(sql, (err, res) => {

    if (err) {
      return cb(err);
    } else {
      cb(null, res)
    }
  });

};

module.exports = insertGoodsToUser;
