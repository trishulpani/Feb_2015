angular.module("RoutingExample").
controller("RoutingController",function($scope,$location){
	$scope.editPerson = function(person){
		$scope.person = person;
		$location.url("/edit");
	};
	$scope.showDetails = function(person){
		$scope.person = person;
		$location.url("/details/" + person.name);
	};
	
	$scope.persons = [
		{name:"Sam",age:12},
		{name:"Ram",age:45},
		{name:"John",age:56},
		{name:"Leela",age:73}
	]
});
