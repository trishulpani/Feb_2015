angular.module("Food").service("ShoppingCartService",function(){
	this.cart = [];
	this.total = 0;
	
	this.computeTotal = function(){
		var me = this;
		this.total = 0;
		this.cart.forEach(function(item){
			me.total += (item.price * item.quantity); 
		});
	};
	this.getExistingItems = function(item){
		var existingItems = this.cart.filter(function(it){
			return it.name == item.name;
		});
		return existingItems;
	};
	this.removeItemFromCart = function(item){
		var existingItems = this.getExistingItems(item);
		if(existingItems[0].quantity > 1)
			existingItems[0].quantity -= 1;
		else{
			var itemToBeRemoved = existingItems[0];
			var newItems = [];
			this.cart.forEach(function(it){
				if(it.name != item.name)
					newItems.push(it);
			});	
			this.cart = newItems;
		}
		this.computeTotal();
	}
	this.addItemToCart = function(item){
		var existingItems = this.getExistingItems(item);
		if(existingItems.length == 0){
			var itemToBeAdded = {
				name : item.name,
				price : item.price,
				quantity : 1
			};
			this.cart.push(itemToBeAdded);		
		}
		else{
			existingItems[0].quantity += 1;
		}
		this.computeTotal();
		console.log("Total: " + this.total);
	}
});

angular.module("Food").service("MenuService",function(){
	this.menuItems = [
		{name:"Veg Soup",price:87},
		{name:"Chicken Soup",price:99},
		{name:"Mutton Soup",price:115},
		{name:"Egg Soup",price:68},
		{name:"Sweet corn Soup",price:100}
	]
});