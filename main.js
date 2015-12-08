/* Hello World */
var _ = require("underscore");
var mongodb = require("mongodb");

console.log("Hello World!");
// run it with "node main.js" in a Command shell (in Windows)


var uri = "mongodb://localhost:27017/timesheets";
mongodb.MongoClient.connect(uri, function(error, db){
	if(error){
		console.error(error);
		process.exit(1);		
	}
	
	var doc = {"date": "2015-12-08", "name":"Alessandro", "type":"holiday", "hours":8};
	db.collection("records").insert(doc, 
		function(error, result){
			if(error){
				console.error(error);
				process.exit(1);
			}			
			
			// show data
			db.collection("records").find()/*.orderBy({"date":-1})*/.limit(5).toArray(
				function(error, docs){
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
		}
	);
		
});