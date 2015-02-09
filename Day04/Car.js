function create(model,year){
	console.log("Created " + model + " in " + year);
}
function drive(model,speed){
	console.log("Driving " + model + " at the speed of " + speed + " kmh");
}
exports.mydrive = drive;
exports.createCar = create;