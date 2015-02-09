var numbers = [1,2,3,4,5,5,6,6];

function print(num){
	console.log(num);
}
numbers.forEach(function(num){
	setTimeout(function(){
		print(num);
	},0);
	console.log("After timeout " + num);	
});
console.log("End");

//SEQUENTIAL
/*
function print(num){
	console.log(num);
}
numbers.forEach(function(num){
	print(num);	
});
*/