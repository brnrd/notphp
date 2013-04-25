var express = require('express')
  , routes 	= require('./routes')
  
var app = express()

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.bodyParser());
app.use(express.logger('dev'));

app.use(express.static(__dirname + '/public'));

app.get('/', routes.root);
app.get('/index', routes.index);
app.post('/result', routes.result);
app.get('/result', routes.index);
app.get('*', routes.fourOfour);

app.listen(8888)