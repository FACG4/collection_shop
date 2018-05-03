
const dbConnection = require('../db_connection');

const bcrypt = require('bcrypt');

const validateUser = (email,password1,cb)=>{
const sql = {
  text: 'SELECT * FROM users WHERE email = $1',
  values:[email]
}
  dbConnection.query(sql,(err,res)=>{
    if (err) return cb(err)
    if (res.rows.length>0) {
      let hashPassword=res.rows[0].hashpassword
      bcrypt.compare(password1, hashPassword, function(error, result) {
        console.log(result);
        if (error) {
          return cb({err,type:'something error'});
        }
        else if(result==true){
          return cb(null,res.rows[0])
        }
        else {
          return cb({err,type:'password not match'});
        }
      });
    }
    else {
      return cb({err,type:'Invalied email'})
    }
  });



}
module.exports=validateUser;

// const dbConnections = require("./../db_connection");
//
// function validateUser (req, callback) {
//   dbConnections.query({
//     text: `SELECT email ,hashpassword FROM users WHERE email =$1 AND hashpassword =$2`,
//     values: [req.body.email, req.body.hashpassword]
//   }, (err, res) => {
//     if (err) {
//       return callback(err);
//     }
//     callback(null, res.rows);
//   });
// }
//
//
// module.exports = {
//   validateUser
// };
//////////////////////////////
