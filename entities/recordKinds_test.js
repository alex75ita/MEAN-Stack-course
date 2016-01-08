var should = require("should");
var test = require('unit.js');
var entities = require("../entities"); // = entities/index.js
should = test.should;

    /*it("new Item() should create a valid instance", function() {
		var item = new Item();		
		should.exists(item);
		item.should.have.property("date");
		item.should.have.property("person");
	});*/
    
describe("RecordKinds", function(){
    
    it("should be defined", function(){
        should.exists(entities.RecordKinds);            
    });
    
    it("should contains \"holiday\" and \"permit\" fields", function(){
        entities.RecordKinds.should.have.property("holiday");
        entities.RecordKinds.should.have.property("permit");
    });
    
});