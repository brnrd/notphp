var mysql      = require('mysql')
  , connection = mysql.createConnection({
	  host     : 'mysql2.alwaysdata.com',
	  user     : 'brnrd_blah',
	  password : 'test',
	  database : 'brnrd_notphp'
	})
  , query_nom = 'SELECT * FROM prof JOIN enseigner ON prof_id = id_prof JOIN cours ON id_cours = cours_id WHERE nom = '
  , query_prenom = 'SELECT * FROM prof JOIN enseigner ON prof_id = id_prof JOIN cours ON id_cours = cours_id WHERE prenom = '

exports.root = function (req, res) {
	res.render('index',{title: 'Home'})
};

exports.index = function (req, res) {
	res.redirect('/')
};

exports.result = function (req, res) {
	console.log(req.body.query)
	console.log(req.body.type)
	if (req.body.type == 'nom') {
		res.redirect('/nom/'+req.body.query)
	} else {
		res.redirect('/prenom/'+req.body.query)
	}
};

exports.nom = function (req, res) {
	console.log('query = ' + req.params.query)
	connection.connect();
	connection.query(query_nom + mysql.escape(req.params.query), function (err, rows, fields) {
		if(err){throw(err)}
		res.render('result', {title : 'Result', result: rows})
	});
	connection.end();
};

exports.prenom = function (req, res) {
	console.log('query = ' + req.params.query)
	connection.connect();
	connection.query(query_prenom + mysql.escape(req.params.query), function (err, rows, fields) {
		if(err){throw(err)}
		res.render('result', {title : 'Result', result: rows})
	});
	connection.end();
};

exports.fourOfour = function (req, res) {
  	res.render('404',{title: '404'})
};
