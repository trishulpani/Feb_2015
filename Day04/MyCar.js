exports.Car = new function(){
	this.create = function(model,year){
		this.model = model;
		this.year = year;
	}
	this.drive = function(speed){
		console.log("Driving " + this.model + " at a speed of " + speed + "kmh");
	}
}();