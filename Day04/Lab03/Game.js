module.exports = function(){
	var target = Math.round(Math.random()*100);
	this.message = "";
	this.attempts = "";
	this.gameOver = false;
	var history = [];
	this.generateReport = function(){
		var report = {};
		report.text = "Game played on " + new Date();
		report.attempts = history;
		return report;
	};
	this.play = function(guess){
		this.attempts++;
		if(guess > target)
			this.message = "Aim Lower";
		else if(guess < target)
			this.message = "Aim Higher";
		else{
			this.message = "You've got it in " + this.attempts + " attempts";
			this.gameOver = true;
		}
		history.push({
			attempt:this.attempts,
			mesage : this.message,
			guess : guess
		});
	}
}


