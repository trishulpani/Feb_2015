function f(i){
	if(i == undefined)
		throw new Error("WTH is going on in a saturday evening?");
}

var i = 10;
try{
	f();
	i();	
}
catch(er)
{
	console.log(er.message);
}
