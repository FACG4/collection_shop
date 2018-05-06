const dbConnections = require('../db_connection');

const allGoods = cb => {
  let sql = `SELECT * FROM goods ;`;
  dbConnections.query(
    sql,
    (err, res) => {
      if (err) {
        cb(err);
      } else {
        cb(null, res.rows);
      }
    }
  );
};

module.exports = allGoods;
