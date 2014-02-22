// =======================================
// REQUIRES
// =======================================
var express = require('express'),
    mongoose = require('mongoose'),
	fs = require('fs');

// =======================================
// APP CONFIG
// =======================================
var app = express();
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

app.configure(function() {
    app.set('port', process.env.PORT || 3030);
    app.set('view engine', 'jade');

    app.set('views', __dirname + '/server/views');
    app.set('routes', __dirname + '/server/routes');

	app.use(express.static(__dirname + '/public'));
	app.use(express.static(__dirname + '/db'));


    app.use(express.json());
    app.use(express.urlencoded());
});

app.configure('development', function() {

});

app.configure('production', function() {

});


// =======================================
// ROUTING
// =======================================
var partials = require('./server/routes/partials.js');
var index = require('./server/routes/index.js');
var error = require('./server/routes/error.js');

app.get("/partials/*", partials.webapp);
app.get('/', index.main);
app.get('/home', index.main);
app.get('*', error.fourohfour);


// =======================================
// LAUNCH SERVER
// ======================================
app.listen(app.get('port'));
console.log('Express server listening at http://localhost:' + app.get('port'));