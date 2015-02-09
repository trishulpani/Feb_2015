var http = require("http");
var FileUtils = require("./Lab03/FileUtils");

var server = http.createServer(function(req,res){
	var url = req.url;
	if(url == "/index.html"){
		FileUtils.read("index.html",function(data){
			res.write(data.toString());
			res.end();
		});

		// fs.readFile("index.html",function(err,data){
		// 	res.write(data.toString());
		// 	res.end();
		// });
	}
	else
		res.end();
});
server.listen(8080);
console.log("Running on 8080");