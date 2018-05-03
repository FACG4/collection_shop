<<<<<<< HEAD
exports.get = (req, res) => {
    res.render('home_page', { activePage: { home: true } });
  };
=======
onst select_all_goods = require('../database/queries/select_all_goods');
exports.get = (req, res) => {

select_all_goods((err, result) => {
if (err) return console.log(err);

console.log(result);
res.render('home_page', {
  goods: result
});
})
};
>>>>>>> b1eac5373a9364b0b33975efda7b7e34d7651f4f
