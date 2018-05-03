const check_auth=require('../database/queries/check_auth')

const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const cookie = require('cookie');
const {parse} = require('cookie');


exports.get = (req, res) => {
  res.render('login', {script:'/login_dom.js'});
};

//checkuser 



exports.post = (req, res) => {
    // console.log(req.body.email);

    check_auth.checkuser(req.body.email,req.body.password,(err,result)=>{
        
        if (err) return console.log(err);
        console.log('helloo',result[0]);


        console.log('haaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaashhh',result[0].hashpassword);
        console.log('boooooooooooooody newww password',req.body.password);

        
  bcrypt.compare(req.body.password, result[0].hashpassword, (err, resBoolean) => {
console.log(resBoolean,'raaaaaaaaaaaaaaaaamyyyyyyyyyyy');

    if (!resBoolean) {
        console.log('error in password');
    }
    else {
        
         console.log('succes');

        const userData = {
            userId: result[0].id,
            username: result[0].firstname +' '+result[0].lastname 
          }
          console.log('userdata',userData);
          console.log(process.env.JWT_KEY);
          
           const token = jwt.sign(userData, process.env.JWT_KEY);
           console.log('token',token);
           res.cookie('accessToken', token).redirect('/');

    }

  })


        
    })


    
  };
