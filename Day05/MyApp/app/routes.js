var home = require("./Home");

module.exports = function(app){
	app.get("/add/:a/:b",function(req,res){
		var a = parseInt(req.params.a);
		var b = parseInt(req.params.b);
		res.end("Sum : " + (a+b));
	});
	app.get("/diff/:a/:b",function(req,res){
		var a = req.params.a;
		var b = req.params.b;
		res.end("Difference : " + (a-b));
	});
	app.get("/hello/:name",function(req,res){
		home.doSomething(req,res);
	});
	// app.get("/hello/:name",function(req,res){
	// 	res.end("Hello " + req.params.name);
	// });
	app.get("/SomeDummy",function(req,res){
		res.end("Hello Dummy JSON");
	});
	app.get("/OtherDummy",function(req,res){
		res.end("Hello Other Dummy JSON");
	});
};
