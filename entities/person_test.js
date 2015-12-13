var should = require("should");
var test = require('unit.js');
var entities = require("../entities"); // = entities/index.js
should = test.should;


describe("Person", function() {
		
	var person;	
	test
		//.case("given a Person()")
		.given(person = entities.Person())
		.when('"name" is not passed', function() {})
		.then('"name" should be "undefined"', function() {
		    person.name.should.be.equal("undefined");
		});		
	
	describe("Person()", function() {	
		it("must return a valid Person", function() {	
			var name = "Ezechiele";	
			var p = entities.Person(name);
			should.exists(p);
			p.should.have.property("name", name);
		});
		
		describe("Given a Person without a name ", function() {
			describe("\"name\" should be \"undefined\"", function() {
								
			});
			
		});
	});
	
	describe("Given a Person with name \"John\"", function() {
		var person;
		var name = "John";
		
		beforeEach(function() {
			person = entities.Person(name);			
		});		 			

		describe("When .name is set to a \"Albert\"", function() {
			it("Then .name should return \"Albert\"", function() {
				var newName = "Albert";
							
				person.name = newName;
				person.name.should.be.exactly(newName);
			});		
		});
		
	});
	
	var person;

	test
		.given("a Person with name \"Alex\"", function() {
			person = entities.Person("Alex");			
		})
		.when("name is set to \"Walter\"", function() {
			person.name = "Walter";			
		})
		.then(/*"name value is \"Walter\"",*/ function() {
			person.should.have.property("name");
			person.name.should.be.equal("Walter");			
		})		
		;
});


