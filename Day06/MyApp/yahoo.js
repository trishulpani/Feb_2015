var http = require("http");	
var data = "{}";
var options = {
  host : "query.yahooapis.com",	
  port: '80',
  path : "/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22FB%22)%0A%09%09&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json",
  method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
	  'Content-Length': data.length
    }
};

var req = http.request(options, function(res) {
  var msg = '';
  res.setEncoding('utf8');
  res.on('data', function(chunk) {
    msg += chunk;
  });
  res.on('end', function() {
    console.log(msg);
  });
});
req.write(data);
req.end();