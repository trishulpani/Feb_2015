module.exports = {
	items : [],
	create : function(values){
		this.items = values;
	},
	add : function(item){
		this.items.push(item);
	},
	remove : function(item){
		var newArr = [];
		this.items.forEach(function(it){
			if(item != it)
				newArr.push(item);
		});
		this.items = newArr;
	},
	size : function(){
		return this.items.length;
	}
};