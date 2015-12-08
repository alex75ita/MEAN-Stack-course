/* Hello World */
var _ = require("underscore");
var mongodb = require("mongodb");

console.log("Hello World!");
// run it with "node main.js" in a Command shell (in Windows)


var uri = "mongodb://localhost:27017/test";
mongodb.MongoClient.connect(uri, function(error, db){
	if(error){
		console.log(error);
		process.exit(1);		
	}
	
	db.collection("example").insert({x:1}, function(error, result){
		if(error){
			console.log(error);
			process.exit(1);			
		}	
		
		db.collection("example").find().toArray(function(error, docs){
			if(error){
				console.log(error);
				process.exit(1);
			}
			
			console.log("Found docs:");
			docs.forEach(function(doc){
				console.log(JSON.stringify(doc));
			});		
			
			process.exit(0);
		});
	});
		
});