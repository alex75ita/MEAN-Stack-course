var assert = require("assert"); // use Node.js internal assert package

describe("feature A", function() {
	it("do_something", function (){
		assert.equal("a", "a");		
	});
	
	it("do_another_thing", function() {
		assert.throws( function() {
			throw "Error!";			
			}	
		);		
	});
	
});

describe("feature B", function() {
	it("do_something", function (){
		assert.equal("a", "a");		
	});
	
	it("do_another_thing", function() {
		assert.throws( function() {
			throw "Error!";			
			}	
		);		
	});
	
});