angular.module("Stocks")
.service("StockSymbolLoaderService",function(){
	this.symbols = [];
	this.loadSymbols = function(loader,callback){
		loader({
			method : "GET",
			url : "StockSymbols"	
		}).success(function(output){
			callback(output);
		});
	}
})
.service("YahooStocksService",function(){
	this.baseUrl = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22SYMBOL%22)%0A%09%09&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json";
	this.loadPrice = function(loader,symbol,callback){
		var url = this.baseUrl.replace("SYMBOL",symbol);
		loader({
			url : url,
			method : "GET"
		}).success(function(output){
			var tradePrice = output.query.results.quote.LastTradePriceOnly;
			var change = output.query.results.quote.Change;
			callback(symbol,tradePrice,change);
		})
	}
})





