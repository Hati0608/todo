require('./db')

var createError  = require('http-errors');
var express 	 = require('express');
var path 		 = require('path');
var cookieParser = require('cookie-parser');
var logger 		 = require('morgan');

var routes 		 = require('./routes')
var http 		 = require('http')
var app 		 = express();
var engine 		 = require('ehs-locals')

// view engine setup

app.set('port', process.env.PORT || 3001)
app.engine('ejs', engine)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon())
app.use(logger('dev'));
//app.use(express.json());
app.use(express.bodyParser())
app.use(express.urlencoded({ extended: false }));
app.use(express.methodOverride())
app.use(cookieParser());
app.use(app.router)
app.use(express.static(path.join(__dirname, 'public')));



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

if ('development' == app.get('env')){
	app.use(express.errorHandler())
}

app.post('/create'. routes.create)

http.createServer(app).listen(app.get('port'), function(){
	console.log('express server listening on port ' + app.get('port'))
})

module.exports = app;
