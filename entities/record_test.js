var should = require("should");
var test = require('unit.js');
var entities = require("../entities"); // = entities/index.js
should = test.should;

describe("Record", function(){
    
    it("should be defined", function(){
        should.exists(entities.Record);            
    });
    
    describe("its constructor", function(){
        it("requires date", function(){            
            (function() {
                var record = entities.Record();
            }).should.throw(/date/);
            // or .throw(/regex/);  // example /^fail/          
        });    
    });
    
});