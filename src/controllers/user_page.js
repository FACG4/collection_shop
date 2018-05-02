const userInfo = require('../database/queries/select_user');
const userGoods = require('../database/queries/select_user_good');
let user = [];
let stringiUserObj = '';
let goods = [];
let stringiGoodObj = '';
exports.get = (req, res) => {
  userInfo(2 , (err,result)=>{

    stringiUserObj = JSON.stringify(result)
    user = JSON.parse(stringiUserObj);
    console.log(user[0]);
    res.render('user_profile' , {user :user[0]});
  });
  userGoods(2 , (err,result)=>{

    stringiGoodObj = JSON.stringify(result)
    good = JSON.parse(stringiGoodObj);
    console.log(good);
    res.render('user_profile' , {good});
  });


  };
