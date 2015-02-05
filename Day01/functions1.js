//Function hoisting

eat("Rice");
sleep(12);

function eat(item){
	console.log("Eating " + item);
}
function sleep(hours){
	console.log("Sleeping " + hours + " hours");
}
