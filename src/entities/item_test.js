var entities = require("../entities");
var should = require("should");
var test = require('unit.js');
should = test.should;


describe("Item", function() {
  
	
	it("Item() should create a valid instance", function() {
		var item = entities.Item();		
		should.exists(item);
		item.should.have.property("date");
		item.should.have.property("person");
	});    

	describe(".kind", function() {
		it("should be set to \"holiday\" as default", function() {
			var item = entities.Item();
			should(item).have.property("kind");
			item.kind.should.be.exactly("holiday");
		});
		
		it("should be set to \"holiday\"", function() {
			var item = entities.Item();
			item.kind = item.kinds.holiday;
			
			item.kind.should.be.exactly("holiday");
		});
		
		it("should be set to \"permit\"", function() {
			var item = entities.Item();
			item.kind = item.kinds.permit;
			
			item.kind.should.be.exactly("permit");
		});		
	});
	
	
	describe(".kinds", function() {
		it("must contains \"holiday\" and \"permit\"", function() {
			var item = entities.Item();
			should(item).have.property("kinds");
			item.kinds.should.be.type("object");
			should(item.kinds).have.property("holiday");
			should(item.kinds).have.property("permit");
		});
	});
			
	describe(".date", function() {
		it("should return a date", function() {
			var year = 2015;
			var month = 09;
			var dateNumber = 15;
			var date = new Date(year, month, dateNumber);
			
			var person = null; 
			var item = entities.Item(date, person);
		
			item.date.should.be.ok;
			should(date.getFullYear()).be.exactly(year);
			should(date.getMonth()).be.exactly(month).and.be.a.Number;	
			should(date.getDate()).be.exactly(dateNumber);	
		});
	});
	
	
	
});