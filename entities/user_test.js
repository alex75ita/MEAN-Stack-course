var should = require("should");
var test = require('unit.js');
var entities = require("../entities"); // = entities/index.js
should = test.should;
var User = entities.User;


describe("User", function() {
	
	it("is defined", function() {
		should(entities).have.property("User");		
	});
	
	describe("User(...)", function() {
		it("should create a new entity", function() {
			
			var user = User({
				name: "Alex",
				email: "alex@gmail.com"			
			});
			
			should(user).be.ok;		
			user.should.have.property("name");
			user.should.have.property("email");	
		});
		
		
	});
	
});