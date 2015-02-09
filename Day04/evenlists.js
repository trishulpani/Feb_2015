module.exports = function(initialItems){
	this.items = initialItems;
	this.add = function(item){
		if(item % 2 == 0)
			this.items.push(item);
	};
	this.size = function(){
		return this.items.length;
	};
}