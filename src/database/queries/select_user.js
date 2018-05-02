const dbConnections = require("./../db_connection");

const selctUser = (user_id, cb) => {
  let sql = {
    text: "SELECT * FROM users WHERE id =  $1 ;",
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

module.exports = selctUser ;
