  const insertuster=require('../database/queries/insert_user')
  exports.get = (req, res) => {
    res.render('signup');
  };


  exports.post = (req, res) => {
    // res.render('home_page', { activePage: { home: true } });
    const {fullname,fname ,lname,email, password} = req.body;
    insertuster.insertUsers(fullname,fname ,lname,email, password,(err,result)=>{
        if (err) return console.log(err);
    res.render('home_page');
        
    })

    
    // console.log(req.body,'req');
    
  };