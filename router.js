var userApis = require('./api/user');

var router = function (app) 　{
	userApis(app);
}

module.exports = router;