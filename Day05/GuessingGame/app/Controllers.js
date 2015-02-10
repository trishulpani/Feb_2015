var FileUtils = require("./FileUtils");
var url = require("url");
var Game = require("./Game");

module.exports = {
	game : new Game(),
	response : null,
	request : null,
	clientFilesFolder : "./public/",
	load : function(fileName){
		 if(fileName.match(/.js/) || fileName.match(/.html/)){
			var path = this.clientFilesFolder + fileName;
			var res = this.response;
			FileUtils.read(path,function(data){
				res.end(data.toString());
			});	
		}
		else if(fileName.match(/PlayGame/)){
			var query = url.parse(this.request.url,true).query;
			var guess = query.guess; 
			this.game.play(guess);
			this.response.end(JSON.stringify({
				message : this.game.message,
				attempts : this.game.attempts
			}));
		}
		else{
			this.response.end();
		}
			
	}
};