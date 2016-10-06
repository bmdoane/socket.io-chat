'use strict'

// Express initializes app to be a function handler that you can supply to an HTTP server (as seen in line 2)
const app = require('express')()
const http = require('http').Server(app)

// We define a route handler / that gets called when we hit our website home
app.get('/', (req, res) => {
	res.send('<h1>Hello World</h1>')
})

// We make the http server listen on port 3000
http.listen(3000, () => {
	console.log('listening on *:3000')
})
