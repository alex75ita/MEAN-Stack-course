var should = require("should");
var test = require('unit.js');
var entities = require("../entities"); // = entities/index.js
should = test.should;

describe("RecordKinds", function(){
    
    it("should be defined", function(){
        should.exists(entities.RecordKinds);            
    });
    
    it("should contains \"holiday\" and \"permit\" fields", function(){
        
        (entities.RecordKinds).should.have.property("holiday");
        (entities.RecordKinds).should.have.property("permit");
    });
        
});

