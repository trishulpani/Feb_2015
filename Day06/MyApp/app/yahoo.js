var http = require("http");	

module.exports = function(){
	this.loadStockValues = function(symbol,callback){
			var options = {
			  host : "query.yahooapis.com",	
			  port: '80',
			  path : "/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22SYMBOL%22)%0A%09%09&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json",
			  method: 'GET',
			    headers: {
			      'Content-Type': 'application/json; charset=utf-8'
			    }
			};
			options.path = options.path.replace("SYMBOL",symbol);
			loadYahooData("",options,function(data){
				var stockResult = JSON.parse(data);
				var result = {symbol:symbol,price:stockResult.query.results.quote.LastTradePriceOnly};
				callback(result);
			})	
	}
	function loadYahooData(data,options,callback){
		var req = http.request(options, function(res) {
		  var msg = '';
		  res.setEncoding('utf8');
		  res.on('data', function(chunk) {
		    msg += chunk;
		  });
		  res.on("end",function(){
			  callback(msg);
		  });
		});
		req.write(data);
		req.end();
	}	
}




