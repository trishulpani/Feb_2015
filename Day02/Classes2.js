var BookService = function(){
				this.title = "";
				this.price = -1;
				this.buy = function(store){
					console.log("Buying " + this.title + " from " + store);
				};
var obj = new BookService();
obj.buy("FK");
obj.buy("Amazon");								

var b1 = new Object();
b1.title = "ABC";
b1.price = 1000;
console.log(b1);
b1 = { title : "ABC", price:1000};

var arr1 = new Array(1,2,3,4,5);
console.log(arr1);
arr1 = [1,2,3,4,5];

var str1 = new String("JS");
console.log(str1);
str1 = "JS";

