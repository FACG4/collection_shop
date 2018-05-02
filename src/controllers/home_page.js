exports.get = (req, res) => {
    res.render('home_page', { activePage: { home: true } });
  };


  exports.post = (req, res) => {
    // res.render('home_page', { activePage: { home: true } });
    console.log(req.body,'req');
    res.end();
    
  };