angular.module("Stocks").
controller("StocksController",function($scope,$http,$interval,StockSymbolLoaderService,YahooStocksService){
	$scope.processSymbols = function(symbols){
		$scope.symbols = symbols.map(function(item){
			return {name:item.name,price:"NA",change:'NA'};
		});
		$scope.loadStockValues();
		$interval($scope.loadStockValues,20000);
	}
	$scope.displayStockValues = function(symbol,price,change){
		var item = $scope.symbols.filter(function(it){
			return it.name == symbol;
		});
		item[0].price = price;
		item[0].change = change;
	}
	$scope.loadStockValues = function(){
		$scope.symbols.forEach(function(item){
			YahooStocksService.loadPrice($http,
				item.name,
				$scope.displayStockValues);
		});
		
	}
	StockSymbolLoaderService.loadSymbols($http,
					$scope.processSymbols);
					
});