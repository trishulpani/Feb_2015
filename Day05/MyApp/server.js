var express = require("express");
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
  extended: true
})); 

app.use(express.static(__dirname + "/public"));
require("./app/routes")(app);

app.get("/",function(request,response){
	response.sendFile("index.html");
});
app.post("/Login",function(request,response){
	var credentials = request.body;
	
	 if(credentials.username == "admin" &&
	 		credentials.password == "admin"){
		response.sendFile(__dirname + "/public/home.html");	
	 }
	 else{
 		response.cookie("skdjfui314341","kjkjdshfdfhk",{expires:new Date(Date.now()+20000)});
	 	response.sendFile(__dirname + "/public/index.html");
	 }
});

var port = 8080;
app.listen(port);
console.log("Running");