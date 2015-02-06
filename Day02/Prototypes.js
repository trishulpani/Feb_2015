function Car(theModel){
	this.model = theModel;
	this.drive = function(){
		console.log("Driving " + this.model);
	}
}

/*
Array.prototype.findAll = function(o){
	var n = [];
	for(var i=this.length-1;i>-1;i--){
		if(o(this[i]))
			n.push(this[i]);
	}
	return n;	
};
*/
Array.prototype.findAll = function(callback){
	var items = [];
	for(var i=0;i<this.length;i++){
		if(callback(this[i]))
			items.push(this[i]);
	}
	return items;	
};


Array.prototype.find = function(callback){
	var number;
	for(var i=0;i<this.length;i++){
		if(number == undefined){
			if(callback(this[i]))
				number = this[i];
		}
		else
			break;
	}
	return number;
};
var numbers = [1,2,3,4,5,6];
//2
numbers.find(function(num){
	return num % 2 == 0;
});

//[2,4,6]
numbers.findAll(function(num){
	return num % 2 == 0;
});


Array.prototype.display = function(){
	for(var i=0;i<this.length;i++){
		console.log(this[i]);
	}
}
Car.prototype.start = function(){
	console.log("Starting " + this.model);
};

var c1 = new Car("Santro");
c1.start();


var numbers = [12,1,12,12,12];
numbers.display();

String.prototype.u = function(){
	return this.toUpperCase();
}
console.log("HELLO".u());
String.prototype.l = function(){
	return this.toLowerCase();
}
console.log("JAVA".l());



//Use it with caution
/*
Array.prototype.push = function(num){
	console.log("hehehehehe");
	return false;
};
Array.prototype.pop = function(){
	console.log("Sorry");
}
var values = [345,12,121];
//values.push(1);
values.pop();
console.log(values.length);
*/










