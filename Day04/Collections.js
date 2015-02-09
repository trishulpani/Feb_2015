var EventEmitter = require("events").EventEmitter;
module.exports = function(){
	var eventEmitter = new EventEmitter();
	var items = [];
	
	this.on = function(eventName,callback){
		eventEmitter.on(eventName,callback);
	};
	this.add = function(item){
		items.push(item);
		eventEmitter.emit("add",item);
	};
	this.remove = function(item){
		var newArr = [];
		items.forEach(function(it){
			if(it != item)
				newArr.push(it);
		});
		if(items.length == newArr.length){
			var err = new Error();
			err.message = "Item " + item + " is not available";
			eventEmitter.emit("remove",item,err);
		}
		else{
			items = newArr;
			eventEmitter.emit("remove",item);
		}
 
	};
	this.each = function(){};
};







