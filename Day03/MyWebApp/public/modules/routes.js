var module = angular.module("RoutingExample");
module.config(function($routeProvider){
	$routeProvider.when("/list",{
		templateUrl : "views/list.html"
	});
	$routeProvider.when("/edit",{
		templateUrl : "views/edit.html"
	});
	$routeProvider.when("/details/:name",{
		templateUrl : "views/details.html"
	});
	$routeProvider.otherwise({
		templateUrl : "views/list.html"
	});
});
