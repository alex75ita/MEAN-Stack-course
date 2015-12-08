/* Timesheets */
var _ = require("underscore");
var mongodb = require("mongodb");

var entities = require("./entities"); // = entities/index.js


console.log("Timesheets!");
// run it with "node main.js" in a Command shell (in Windows)


var uri = "mongodb://localhost:27017/timesheets";

function run(showDataCallback) {
	mongodb.MongoClient.connect(uri, function(error, db){
		if(error) {
			console.error(error);
			process.exit(1);		
		}
		
		var person = entities.Person("Alessandro");		
		var item = entities.Item(new Date(), person);
		item.kind("holiday");
		item.hours(8);
		
		console.log(item);
			
		db.collection("items").insert(item, 
			function(error, result) {
				if(error) {
					console.error(error);
					process.exit(1);
				}			
				
				showDataCallback && showDataCallback(db);
			}
		);
			
	});

}

function showData(db) {	

	db.collection("items").find().sort({"date":-1}).limit(10).toArray(
		function(error, docs) {
			if(error){
				console.error(error);
				process.exit(1);
			}		
			
			console.log("Last records:");
			docs.forEach(
				function(doc){
					console.log(JSON.stringify(doc));							
				}
			);
			
			process.exit(0);
		}				
	);	
	
};


run(showData);
