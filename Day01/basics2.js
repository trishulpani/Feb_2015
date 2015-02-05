//var countries2 = new Array();
var countries = [];
countries["Asia"] = ["India","SL","China"];
countries["Europe"] = ["Spain","France"];
countries["NA"] = ["US","Canada"];

//var confusedYourself[0][1] = 0;

for(var item in countries){
	console.log(item);
	console.log(countries[item]);
	console.log();
}