var express = require('express')
var socket = require('socket.io')
var app = express()
var server = app.listen(3000,function(){
	console.log("Hey I am listening...")
})
app.use(express.static('public'))
var io = socket(server)
io.on('connection',function(socket){
	console.log('Connection made' + socket.id)

	socket.on('chat',function(data){
       io.sockets.emit('chat',data)
	})

	socket.on('typing',function(data){
		socket.broadcast.emit('typing',data)
	})
})