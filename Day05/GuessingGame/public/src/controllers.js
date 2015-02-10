angular.module("Game")
.controller("GameController",function($scope,GameService){
	$scope.play = function(){
		GameService.play($scope.guess,function(response){
			$scope.message = response.message;
			$scope.attempts = "Attempts: " + response.attempts;
		});
	}
});