var fs = require("fs");
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (text) {
	fs.appendFile('./message.txt', text, function (err) {
	  	if (err) throw err;
	  	console.log('It\'s saved!');
	});
  if (text === 'q\n') {
     process.exit();
  }
});
