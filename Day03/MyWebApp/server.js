var express = require("express");
var app = express();
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/node_modules/angular"));

app.get("/StockSymbols",function(req,res){
	var output = JSON.stringify([
		{name:"GOOG"},{name:"HP"},{name:"FB"},{name:"IBM"},
		{name:"INFY"},{name:"INTL"},{name:"AAPL"}
	]);
	res.end(output);
});
app.post("/GeographicServer",function(request,response){
	var params = request.query;
	var country = params.country;
	var output = { capital : "Not available in DB",
				 	continent : "Not available in DB"
				 };
	if(country == "India"){
		output = {
			capital : "New Delhi",
			continent : "Asia"
		};
	}
	else if(country == "UK"){
		output = {
			capital : "London",
			continent : "Europe"	
		};
	}
	response.end(JSON.stringify(output));			 
});
app.get("/",function(request,response){
	response.end("Hello World");
});
app.listen(8080);
console.log("Server is running now");