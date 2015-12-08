var assert = require("assert");
var entities = require("../entities"); // = entities/index.js


describe("Person", function() {
	it("contructor work", function() {		
		var p = entities.Person("aaa");
		assert.ok(1);
	});	

});


