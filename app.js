var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

var indexRouter = require('./routes/index');
var textsRouter = require('./routes/textsRouter');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var dbAddress = 'mongodb://localhost/cocTexts';
mongoose.connect(dbAddress, {useNewUrlParser: true}, function(err, db) {
  if (err) {
      console.log('Sorry unable to connect to MongoDB Error: ', err);
  } else {
      var collection = db.collection('connectionStatus');
      console.log("MongoDB connection message: ");
      collection.find({}).toArray(function(err, response) {
         console.log(JSON.stringify(response, null, 1));
      }); 
  }
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/texts', textsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app