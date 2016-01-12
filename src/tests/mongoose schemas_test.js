var should = require("should");
var test = require('unit.js');
var mongoose = require("mongoose");
var entities = require("../entities");

var User = entities.User;

var mongoDBConnection = "mongodb://localhost:27017/timesheets_test";


describe("Mongoose", function() {
	
    /*
	beforeEach.skip(function(done) {
		// close connection
		console.log("mongoose.connection.db?");
		if(mongoose.connection.db) {
			console.log("open");
			mongoose.disconnect( function() {
                console.log("disconnect callback");
				done();
			});
            
            if(mongoose.connection.db)
                console.log("alredy connected");
		}
		else {
			console.log("closed");
			done();
		}			
	});*/
    
    beforeEach(function() {
         mongoose.disconnect();        
    });
    

	describe("connect()", function() {	
				
        it.skip("doesn't raise error", function(done) {
            mongoose.connect(mongoDBConnection);             
            var db = mongoose.connection;
            db.on("error", function(error) {
                test.assert.fail("connection error");
                done();           
            });            
            db.once("open", function() { 
                done();                
            });  
		});                
   
        // this one goes in timeout
		describe("when URI is wrong", function() {
            // wrong server: timeout
            // wrong port:
            it("raise error", function(done) {
                var wrong_uri = "mongodb://server:27017/timesheets_test";
                //wrong_uri = mongoDBConnection;
                var options = { server: { connectTimeoutMS: 0.5*1000 } };
                
                mongoose.connect(wrong_uri, options);
                              
                var db = mongoose.connection;
                db.on("error", function(error) {  
                    //test.assert.fail("connection error");
                    should(error).have.property("name");
                    should(error).have.property("message");
                    done();    
                });	 
                         
            });
		});     
		
	});
	
	describe("User.save()", function() {
		it("should save document in the collection", function() {
			
			var name = "Alex";			
			
			// todo: add cleaning	
			//deleteUser(name, function() {		
			mongoose.connect(mongoDBConnection, function(done) {
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

function conenctToDb(callback) {
    //mongoose.connect(mongoDBConnection, function() {
}

function loadUser(name, callback) {	
	User.find({"name":name}, callback);	
}

/*
function deleteUser(namee, done) {
    User.model.remove({}, function() {
      done();
    });
}*/