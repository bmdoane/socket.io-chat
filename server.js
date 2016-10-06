'use strict'

// Express initializes app to be a function handler that you can supply to an HTTP server (as seen in line 2)
const app = require('express')()
const http = require('http').Server(app)

// Refactor route handler to use sendFile instead
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

// We make the http server listen on port 3000
http.listen(3000, () => {
	console.log('listening on *:3000')
})
