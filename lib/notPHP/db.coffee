mysql = require 'mysql'

module.exports = (app) ->
	class app.dao

		connection = mysql.createConnection {
			host     : 'mysql2.alwaysdata.com',
			user     : 'brnrd_blah',
			password : 'test',
			database : 'brnrd_notphp'}

		querynom = 'SELECT * FROM prof JOIN enseigner ON prof_id = id_prof JOIN cours ON id_cours = cours_id WHERE nom = '
		queryprenom = 'SELECT * FROM prof JOIN enseigner ON prof_id = id_prof JOIN cours ON id_cours = cours_id WHERE prenom = '
		queryAll = 'SELECT * FROM prof JOIN enseigner ON prof_id = id_prof JOIN cours ON id_cours = cours_id'

		@getAll = (data) ->
			connection.query queryAll, (err, rows, field) ->
				if err 
					throw err 
				data rows
