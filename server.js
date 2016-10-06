'use strict'

// Express initializes app to be a function handler that you can supply to an HTTP server (as seen in line 2)
const app = require('express')()
const http = require('http').Server(app)
// Initialize a new instance of socket.io by passing the http (the HTTP server) object
const io = require('socket.io')(http)

// Refactor route handler to use sendFile instead
app.get('/', (req, res) => {
  res.sendFile('index.html')
})

io.on('connection', (socket) => {
	console.log('a user connected')
})

// We make the http server listen on port 3000
http.listen(3000, () => {
	console.log('listening on *:3000')
})

