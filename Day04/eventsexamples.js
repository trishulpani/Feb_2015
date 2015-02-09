var EventEmitter = require("events").EventEmitter;
var eventEmitter = new EventEmitter();

eventEmitter.on("hello",function(name){
	console.log("Hello " + name);
});
eventEmitter.on("hello",function(name){
	console.log("Hi " + name);
});
eventEmitter.on("bye",function(data){
	console.log("Bye Bye " + data.name);
});

eventEmitter.emit("hello","Sam");
eventEmitter.emit("bye",{name:"Ram"});