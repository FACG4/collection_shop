const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
// import 'express-handlebars'
const bodyParser=require('body-parser');
const exphbs = require('express-handlebars');
const cookieParser = require('cookie-parser');



const controllers = require('./controllers/index');
// import helpers
const helpers = require('./views/helpers/index');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// set up view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main',
    helpers,
  })
);

app.set('port', process.env.PORT || 3000);
app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(cookieParser());

app.use(controllers);

module.exports = app;
