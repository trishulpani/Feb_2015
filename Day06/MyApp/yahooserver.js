var express = require("express");
var app = express();
var socketio = require("socket.io");
var server = require("http").createServer(app);
var yahoo = require("./app/yahoo.js");

var yahooServer = new yahoo();

app.use(express.static(__dirname + "/public"))
var io = socketio(server);
io.on("connection",function(socket){
	setInterval(function(){
		yahooServer.loadStockValues("FB",function(result){
			console.log(result);		
			socket.emit("stocks",result);
		})		
	},10000);

});

server.listen(8080);
console.log("Server running and Socket Open");





