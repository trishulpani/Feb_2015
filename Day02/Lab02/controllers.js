angular.module("Food")
.controller("MenuController",function($scope,$rootScope,MenuService,ShoppingCartService){
	$scope.menu = MenuService.menuItems;
	$rootScope.total = 0;
	$scope.addToCart = function(item){
		ShoppingCartService.addItemToCart(item);
		$rootScope.total = ShoppingCartService.total;
	}
})
.controller("ShoppingCartController",function($scope,$rootScope,ShoppingCartService){
	$scope.cart = ShoppingCartService.cart;

	$scope.removeFromCart = function(item){
		ShoppingCartService.removeItemFromCart(item);
		$scope.cart = ShoppingCartService.cart;
		$rootScope.total = ShoppingCartService.total;
	}
});