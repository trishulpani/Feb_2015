angular.module("Stocks").
controller("StocksController",function($scope,$http,$interval,StockSymbolLoaderService,YahooStocksService){
	$scope.processSymbols = function(symbols){
		var symbolsToBeStoredInLS = "";
		$scope.symbols = symbols.map(function(item){
			symbolsToBeStoredInLS += item.name + ",";
			return {name:item.name,price:"NA",change:'NA'};
		});
		symbolsToBeStoredInLS = symbolsToBeStoredInLS.substring(0,symbolsToBeStoredInLS.length-1);
		localStorage.setItem("symbols",symbolsToBeStoredInLS);
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
	if(localStorage.getItem("symbols") == undefined){
		console.log("Loading symbols from server");
		StockSymbolLoaderService.loadSymbols($http,
						$scope.processSymbols);
	}
	else{
		console.log("Loading from Local Storage");
		var symbols = localStorage.getItem("symbols");
		var arr = symbols.split(",");
		$scope.symbols = arr.map(function(item){
			return {name:item,price:"NA",change:'NA'};
		});
	}
					
});










