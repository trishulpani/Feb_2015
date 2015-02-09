var EventEmitter = require("events").EventEmitter;

var MyCollections = function(){};
MyCollections.__proto__ = new EventEmitter();

MyCollections.add = function(item){
	this.emit("add",item);
}

MyCollections.on("hello",function(name){
	console.log("hello " + name);
});

MyCollections.emit("hello"," what is going on?");
