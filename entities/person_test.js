var should = require("should");
var entities = require("../entities"); // = entities/index.js

describe("Person", function() {
	it("Person() work", function() {	
		var name = "Ezechiele";	
		var p = entities.Person(name);
		should.exists(p);
		p.should.have.property("name", name);
		//p.name.should.be.exactly(name);
	});	
	
	it("name() should change name", function() {
		var newName = "Albert";
		var p = entities.Person("aaa");
		
		p.name = newName;
		p.name.should.be.exactly(newName);		
	});
	
	it('Person() when "name" is not given has "name" equal to "undefined"', function() {
		var person = entities.Person();
		person.name.should.be.exactly("undefined");		
	});

});


