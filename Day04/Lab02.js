var Collections = require("./Collections");

var myColl1 = new Collections();
myColl1.on("add",function(item){
	console.log("Added " + item + " to myColl1");
});
myColl1.on("remove",function(item,err){
	console.log("Removed " + item + " from myColl1");
	if(err)
		console.log(err);
});
myColl1.add(12);
myColl1.add(14);
myColl1.remove(14);
myColl1.remove(16);//Should print a message 16 not found
myColl1.each(function(item){
	console.log(item);
});
