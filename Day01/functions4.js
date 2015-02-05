var sleep = function(){
	console.log("sleeping");
};
sleep();

//Higher order functions
function doSomething(fn){
	fn();
}

var work = function(){ 
	console.log("Working");
};
doSomething(work);
doSomething(function(){
	console.log("Scratching my head");
});
function confuse(){
	return function(){
		console.log("Thoroughl confused");
	};
}
confuse()();

//module.controller("SomeController",function(){});



