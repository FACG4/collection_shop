const dbConnections = require('../db_connection');

const selectUserProfile = (user_id, cb) => {

  let sql = {
    text: `SELECT g.goodsName, g.imgUrl, g.price, g.description, u.fullName, u.firstName, u.lastName, u.email FROM goods g INNER JOIN userGoods ug ON g.id = ug.goodsId INNER JOIN users u ON u.id = ug.userId WHERE ug.userId = $1 ;`,
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

module.exports = selectUserProfile;
