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
	var query = req.body.query;
	var sql_query;
	if (req.body.type == 'nom') {
		sql_query = query_nom + mysql.escape(query);
	} else {
		sql_query = query_prenom + mysql.escape(query);
	}
	connection.query(sql_query, function (err, rows, fields) {
		if(err){throw(err)}
		res.render('result', {title : 'Result', result: rows})
	});
};

exports.fourOfour = function (req, res) {
  	res.render('404',{title: '404'})
};
