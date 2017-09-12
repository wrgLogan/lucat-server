var apis = [{
    path: '/user/saveinfo',
    method: 'get',
    value: function(req, res) {
        console.log('6666666666');
    }
}]

module.exports = function(app) {
    // apis.forEach(function(api) {
        
        var api = apis[0];
        console.log(api);
        app[api.method](api.path, api.value);
    // })
}