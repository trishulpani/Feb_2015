var express = require("express");
var session = require("express-session");
var app = express();
var MemoryStore = session.MemoryStore;
app.use(session({
    store: new MemoryStore(),
    secret: 'somekey',
    key: 'WTH',
	resave: true,
    saveUninitialized: true
}));


var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
  extended: true
})); 

require("./app/routes")(app);

app.get("/",function(request,response){
	response.sendFile(__dirname + "/public/index.html");
});
app.get("/home.html",function(request,response){
	if(request.session.loggedIn != "yes")
		response.redirect("/");
	else
		response.sendFile(__dirname + "/public/home.html");	
});
app.post("/Logout",function(request,response){
	console.log(request.session);
	request.session.destroy();
	response.redirect("/");
});
app.post("/Home",function(request,response){
	var credentials = request.body;
	 if(credentials.username == "admin" &&
	 		credentials.password == "admin"){
		response.sendFile(__dirname + "/public/home.html");	
		request.session.loggedIn = "yes";
	 }
	 else{
 		response.cookie("skdjfui314341","kjkjdshfdfhk",{expires:new Date(Date.now()+10000)});
	 	response.sendFile(__dirname + "/public/index.html");
	 }
});

var port = 8080;
app.listen(port);
console.log("Running");