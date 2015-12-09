/* Timesheets */
var _ = require("underscore");
var mongodb = require("mongodb");

var entities = require("./entities"); // = entities/index.js


console.log("Timesheets!");
// run it with "node main.js" in a Command shell (in Windows)


var uri = "mongodb://localhost:27017/timesheets";


function run() {
	
	console.log("run");
	
};

function insertData(showDataCallback) {
	mongodb.MongoClient.connect(uri, function(error, db){
		if(error) {
			console.error(error);
			process.exit(1);		
		}
		
		var person = entities.Person("Alessandro");	
		var date = new Date(2015, 12, 6);	
		var item = entities.Item(date, person);
		item.kind = "permit";
		item.hours = 4;
			
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
