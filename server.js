var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var MongoStore = require('connect-mongo')(session);
var router = require('./router');
var config = require('./config');

var app = express();

var sess = {
  store: new MongoStore({ url: config.DATABASE_URL }),
  secret: config.SECRET,
  name: "SessionMgmt",
  resave: false,
  saveUninitialized: true,
  cookie: { 
    path: '/',
    maxAge: 10000
  }
};

app.use(bodyParser.json());
app.use(session(sess));
app.use('/sessions', router);

app.listen(config.PORT, function(){
	console.log("Server running on port 8080");
})