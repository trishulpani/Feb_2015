angular.module("Game").
service("GameService",function($http){
	this.play = function(guess,callback){
		$http({
			url : "PlayGame",
			method : "GET",
			params : {
				guess : guess
			}
		}).success(function(output){
			callback(output);
		});
	}
});