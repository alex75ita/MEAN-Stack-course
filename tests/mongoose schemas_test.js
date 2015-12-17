var should = require("should");
var test = require('unit.js');
var mongoose = require("mongoose");
var entities = require("../entities");

var User = entities.User;

var mongoDBConnection = "mongodb://localhost:27017/timesheets_test";


describe("Mongoose", function() {
	
	beforeEach(function(done) {
		// close connection
		if(mongoose.connection.db) {
			//console.log("...close conenction");
			mongoose.disconnect( function() { done(); });
			//test.fail("connection is open");
		}
		else 
			done();			
	});
	
	describe("connect()", function() {	
		
		it("doesn't raise error", function() {
			mongoose.connect(mongoDBConnection, function(error) {
				should(error).not.be.ok;	
			});
			
		});
		
		// todo: this cause timeout
		it.skip("when URI is wrong ", function(done) {
			var wrong_uri = "mongodb://fake:27017/a_collection";
			mongoose.connect(wrong_uri, function(error) {				
				should(error).be.ok;
			});
		});
		
	});
	
	describe("User.save()", function() {
		it("should save document in collection", function() {
			
			var name = "Alex";
			
			
			// todo: add cleaning	
			//deleteUser(name, function() {		
						
			mongoose.connect(mongoDBConnection, function() {
				
				//mongoose.connection.db.dropDatabase( function() {					
			
					var user = new User({
						name: name,
						email: "alex_1@gmail.com"				
					});
					
					console.log(111);
				
					user.save(function(error) {
						console.log(222);
						console.error("fail to save: " + error);
						
						User.find({"name":name}, function(error, docs) {
							console.log(333);
							should(error).not.be.ok;	
							if(error)
								test.fail(error);
							console.log(docs);							
						});	
						
						/*
						loadUsers(name, function(error, docs) {
							console.log(333);
							if(error)
								test.fail(error);
							console.log(docs);
						});*/
												
							/* var promise = gnr.save();
							assert.ok(promise instanceof require('mpromise'));
						
							promise.then(function(doc) {
							assert.equal(doc.name, "Guns N' Roses");
							});*/						
						
						//should(user).not.be.ok;									
					});
				//}); //dropDatabase
				
			}); //connect
			
		});
		
	});
	
	
});


// utils

function loadUser(name, callback) {	
	User.find({"name":name}, callback);	
}

/*
function deleteUser(namee, done) {
    User.model.remove({}, function() {
      done();
    });
}*/