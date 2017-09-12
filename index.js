var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var userApi = require('./api/user');

// config
var PORT = 80;
var appID = 'wxcfcee431d0d17828';
var appSecret = '7d9280834c38b2f5c189b1e1fdb7b508';

app.use(bodyParser.json({limit: '1mb'}));
app.use(bodyParser.urlencoded({
	extended: true
}));

app.get('/ping', function(req, res, next) {
	console.log('heard request');
	next();
})

// 路由
userApi(app);

app.listen(PORT);
console.log('lucat server listening on port: ' + PORT);