/*
Here's a small exercise that will help you get accustomed to functional style of coding in JavaScript. NodeJS and AngularJS API follow this style extensively.

Create an array of numbers 1,2,3,4,5,6,30,56,84,23,100
Implement the following in a traditional and functional style

1) Print all the numbers
2) Print the sum of all numbers
3) Print the first odd number
4) Generate an list of squares of all numbers
5) Generate a list of numbers divisible by 5. 
6) Print all the even numbers
Hint:
1) Refer to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
2)Compare the styles and study the difference
*/
var numbers = [1,2,3,4,5,6,30,56,84,23,100];
numbers.forEach(function(num){
	console.log(num);
}); 

console.log("--Generate a list of numbers divisible by 5---");
console.log(numbers.filter(function(num){
	return num%5==0;
}));

console.log("--Generate a list of squares---");
numbers.map(function(num){
	return num*num;
}).forEach(function(item){
	console.log(item);
});

console.log("--First odd number---");
console.log(numbers.filter(function(num){
	return num % 2 != 0;
})[0]);

console.log("--Sum of all numbers---");
var sum = numbers.reduce(function(prev,next){
	return prev + next;
}); 
console.log(sum);
 
 
 
 
 
 
 
 
 
 
 
 
 