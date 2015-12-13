var should = require("should");
var test = require('unit.js');
var mongoose = require("mongoose");
var entities = require("../entities");

var User = entities.User;

var mongoDBConnection = "mongodb://localhost:27017/timesheets_test";


describe("Mongoose", function() {
	

	
	describe("connect()", function() {
		
		beforeEach(function() {
			// close connection
			if(mongoose.connection.db) {
				console.log("connection is open");
				mongoose.disconnect();
			};
		});
		
		it("doesn't raise error", function() {
			mongoose.connect(mongoDBConnection, function(error) {
				should(error).not.be.ok;
				//console.error("Error 1: " + error);	
			});
			
		});
		
		it("when URI is wrong ", function() {
			var wrong_uri = "mongodb://fake:27017/a_collection";
			mongoose.connect(wrong_uri, function(error) {
				should(error).be.ok;
				//console.error("Error 2: " + error);
			});
		});
		
	});
	
	describe.skip("User.save()", function() {
		it("should save document in collection", function() {
			
			var name = "Alex";
			
			// todo: add cleaning
			mongoose.disconnect();
			
			
			mongoose.connect(mongoDBConnection, function() {
			
				var user = new User({
					name: name,
					email: "alex_1@gmail.com"				
				});
			
				user.save(function(error) {
					console.error("fail to save: " + error);
					
					//var users = loadUser(name
					
					//should(user).not.be.ok;									
				});
			}); // connect
			
		});
		
	});
	
	
});


// utils

function loadUser(name, errorCB, doneCB) {
	
	mongoose.disconnect();
	
	mongoose.connect(mongoDBConnection, function() {
		User.find({"name":name}, function(error, docs) {
			if(error)
				errorCB(error);
			doneCB(docs);
		});		
	});		
}