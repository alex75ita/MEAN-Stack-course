/* Hello World */
var _ = require("underscore");
var mongodb = require("mongodb");

var Person = require("./entities/person.js");


console.log("Hello World!");
// run it with "node main.js" in a Command shell (in Windows)


var uri = "mongodb://localhost:27017/timesheets";

function run(showDataCallback) {
	mongodb.MongoClient.connect(uri, function(error, db){
		if(error) {
			console.error(error);
			process.exit(1);		
		}
		
		var person = Person("Alessandro");		
		var doc = {"date": "2015-12-06", "name":person.name(), "type":"holiday", "hours":8};
			
		db.collection("records").insert(doc, 
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

	db.collection("records").find().sort({"date":-1}).limit(10).toArray(
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
