var router = function(app)　{
	app.get('/name', function(req, res) {
		var param = {
			name: 'logan'
		};
		
		res.send(param);
	})
}

module.exports = router;