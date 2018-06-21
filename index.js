'use strict';

var request = require("request");
var express = require('express');
// var quotesRepository = require('./quotesRepository');
var app = express();
var port = process.env.PORT || 3000;

app.all('*', function (req, res, next) {
	res.set('Access-Control-Allow-Origin', '*');
	next();
});

app.get('/', function (req, res) {
  res.send('Test')
})

app.listen(port, function () {
	console.log('Server running on port', port);
})


request("http://www.google.com", function(error, response, body) {
  console.log(body);
});

// http.listen(process.env.PORT || 3000, function(){
// console.log('listening on *:3000');
// });
