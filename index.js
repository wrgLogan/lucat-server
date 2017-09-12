var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = require('./router');

// config
var PORT = 80;
var appID = 'wxcfcee431d0d17828';
var appSecret = '7d9280834c38b2f5c189b1e1fdb7b508';

app.set('view engine', 'html');

app.use(bodyParser.json({limit: '1mb'}));
app.use(bodyParser.urlencoded({
	extended: true
}));

// 路由
router(app);

app.listen(PORT);
console.log('lucat server listening on port: ' + PORT);