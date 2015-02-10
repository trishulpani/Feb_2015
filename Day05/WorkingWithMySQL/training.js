var db = require("mysql");
var options = {
	host : "localhost",	user : "root", password : "durasoft",
	database : "training"
};
var connection = db.createConnection(options);
connection.connect();

//Insert values
var sql = "insert into persons(first_name,last_name,age) values(?,?,?)";
connection.query(sql,["Raju","Bola",12],function(err,result){
	if(err) throw err;
	console.log(result.affectedRows);
});

//Load values
sql = "select * from persons";
connection.query(sql,[],function(err,rows){
	if(err) throw err;
	rows.forEach(function(row){
		console.log(row.first_name + ", " + 
			row.last_name + ", " + 
			row.age);
	});
});
connection.end();