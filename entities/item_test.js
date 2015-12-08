var entities = require("../entities");
var should = require("should");

describe("Item", function() {
	it("Item() should create a valid instance", function() {
		var item = entities.Item();		
		should.exists(item);
		item.should.have.property("date");
		item.should.have.property("person");
	});
	
	describe(".date", function() {
		it("should return a date", function() {
			var year = 2015;
			var month = 09;
			var dateNumber = 15;
			var date = new Date(year, month, dateNumber);
			
			var person = null; 
			var item = entities.Item(date, person);
		
			item.date.should.be.ok();
			should(date.getFullYear()).be.exactly(year);
			should(date.getMonth()).be.exactly(month).and.be.a.Number;	
			should(date.getDate()).be.exactly(dateNumber);	
		});
	});
	
});