module.exports = {
	start : function(callback){
		process.stdin.setEncoding('utf8');
		process.stdin.on("data",function(text){
			callback(text);
		});	
	},
	end : function(){
		process.exit();
	}
};
