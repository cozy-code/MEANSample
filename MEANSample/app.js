var express = require('express');
var routes = require('./routes/index');
var user = require('./routes/user');
var person = require('./routes/person');
var http = require('http');
var path = require('path');
var app = express();
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
var stylus = require('stylus');
app.use(stylus.middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}
app.get('/', routes.index);
app.get('/newForm', routes.newForm);
app.get('/list', routes.list); //一覧ページ
app.get('/users', user.list);
// Web API
app.post("/person", person.save); //引数なしPOSTは新規作成
app.get("/person", person.query); //webapi用 引数なしget:一覧
http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
//# sourceMappingURL=app.js.map