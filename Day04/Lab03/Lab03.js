var FileUtils = require("./FileUtils");
var IOUtils = require("./IOUtils");
var Game = require("./Game");

console.log("Welcome to the Guessing Game. Enter a number between 1 and 100");


var game = new Game();

function start(){	
	var existingReports;
	FileUtils.read("./reports.json",function(data){
		try{
			existingReports = JSON.parse(data);	
			console.log(data.toString());
			console.log("****Let's play a new game");
		}catch(err){
			existingReports = {"reports" : []};
			console.log("No reports found");
		}	
			IOUtils.start(function(num){
				game.play(num);
				console.log(game.message);
				if(game.gameOver){
					var report = game.generateReport();
					existingReports.reports.push(report);
					var contents = JSON.stringify(existingReports);
					FileUtils.write("./reports.json",
					contents,
					function(message){
						console.log(message);
						IOUtils.end();
					});
				}
			});
	});	
}
start();






