/**
 * Module dependencies.
 */
var moment = require('moment');
var mongoose = require('mongoose');
var express = require('express');
var user = require('./routes/users');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

mongoose.connect('mongodb://localhost/MathSizzle');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());

app.use(function(req, res, next) {
  console.log('%s %s %s', req.method, req.path, moment().format('YYYYMMDD HH:mm:ss'));
  next();
});

app.use('/users', user);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
