var List = require("./lists");
var EvenList = require("./evenlists");

List.create([1,2,3,4,5]);
List.add(4);
List.remove(6);
List.size(); //Print 6

var el1 = new EvenList([2,4,6,8]);
el1.add(10);
el1.add(11);
el1.add(12);
el1.size(); //Print 6