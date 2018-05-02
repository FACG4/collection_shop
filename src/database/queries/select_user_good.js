const dbConnections = require("./../db_connection");

const selctUserGood = (user_id, cb) => {
  let sql = {
    text: 'select * from goods inner join userGoods on goods.id = userGoods.goodsId where userGoods.userId = $1 ;',
    values: [user_id]
  };
  dbConnections.query(
    sql,
    (err, res) => {
      if (err) cb(err);
      else {
        cb(null, res.rows);
      }
    }
  );
};

module.exports = selctUserGood;
