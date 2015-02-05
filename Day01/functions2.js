function add(){
	var sum = 0;
	for(var i=0;i<arguments.length;i++){
		sum += arguments[i];
	}
	console.log("Sum: " + sum);
}
add(1,2,3,4,45);
add(324,234,324,32423,423,432,4234234);
add(2,3);
add(45,2345,4235,425,4325,234,5234,53,425,3453);

//$("#name").val("Sam");
//console.log($("#name").val());

function eat(item){
	//console.log(arguments);
	for(var i=0;i<arguments.length;i++){
		console.log(arguments[i]);
	}
	console.log("Eating " + item);
	console.log();
}

eat("Rice");
eat("Rice","Roti");
eat(24,"kg","rice");
eat(24,7,365,"days");
eat(false);
eat("WTH is this?");
eat();