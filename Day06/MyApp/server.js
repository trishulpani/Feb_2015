var express = require("express");
var app = express();
var socketio = require("socket.io");
var server = require("http").createServer(app);

app.use(express.static(__dirname + "/public"))
app.get("/",function(req,res){
	res.end("Hello World");
});
var io = socketio(server);
io.on("connection",function(socket){
	console.log("*****Connected*** " + socket.conn.id);
	socket.on("cool",function(data){
		console.log("From " + socket.conn.id + " " + data);
	});
	// setInterval(function(){
	// 	socket.emit("hello","welcome to my den " + new Date());
	// },5000);

});


server.listen(8080);
console.log("Server running and Socket Open");





