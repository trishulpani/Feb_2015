module.exports = {
	doSomething : function(req,res){
		res.end("Hi " + req.params.name);
	}
};