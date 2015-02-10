var http = require("http");
var url = require("url");
var controllers = require("./app/Controllers");

var server = http.createServer(function(req,res){
	controllers.request = req;
	controllers.response = res;
	controllers.load(req.url);
});
server.listen(8080);
console.log("Running on 8080");