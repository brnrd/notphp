module.exports = (app) ->
  # Index
  app.get '/', app.ApplicationController.index

  app.post '/query', app.ApplicationController.query
  app.get '/result', app.ApplicationController.result

  # Error handling (No previous route found. Assuming it’s a 404)
  app.get '/*', (req, res) ->
    res.render '404', status: 404, view: 'four-o-four', title: '404'