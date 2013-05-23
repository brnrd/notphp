module.exports = (app) ->
  class app.ApplicationController

    # GET /
    @index = (req, res) ->
      res.render 'index', view: 'index', title: 'Home'

    @query = (req, res) ->
    	res.redirect '/result'

    @result = (req, res) ->
    	app.dao.getAll (data) ->
    		res.render 'result', view: 'result', title: 'Result', data: data
