var should = require("should");
var entities = require("../entities"); // = entities/index.js

describe("Person", function() {
	it("contructor work", function() {	
		var name = "Ezechiele";	
		var p = entities.Person(name);
		should.exists(p);
		p.name.should.be.exactly(name);
	});	

});


