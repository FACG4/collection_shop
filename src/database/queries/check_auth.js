const dbConnections = require("./../db_connection");

function validateUser (req, callback) {
  dbConnections.query({
    text: `SELECT email ,hashpassword FROM users WHERE email =$1 AND hashpassword =$2`,
    values: [req.body.email, req.body.hashpassword]
  }, (err, res) => {
    if (err) {
      return callback(err);
    }
    callback(null, res.rows);
  });
}


module.exports = {
  validateUser
};
