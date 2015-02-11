describe("AppControllerTest",function(){
	var $controller,$scope;
	
	beforeEach(module('App'));
	
    beforeEach(inject(function($injector){
  		$controller = $injector.get("$controller");
	}));

    it('should be invalid credentials', function() {
  	  var $scope = {};
      var controller = $controller('AppController', { $scope: $scope });
      $scope.username = 'assadasd';
  	  $scope.password = 'asdasdsadasd';
      $scope.login();
      expect($scope.message).toEqual('Invalid credentials');
      });
      
	it('should be Sigining in...', function() {
  	  var $scope = {};	
      var controller = $controller('AppController', { $scope: $scope });
      $scope.username = 'admin';
  	  $scope.password = 'admin';
      $scope.login();
      expect($scope.message).toEqual('Signing in...');
    });
	
});