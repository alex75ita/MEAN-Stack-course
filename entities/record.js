
require("../entities/person.js");
var RecordKinds = require("../entities/recordKinds.js");

function Record (params) {
    
    //this.kinds = {holiday:"holiday", permit:"permit"};
    
    var params = params || {};
    this.insertDate = new Date();
    this.date = params.date;
    this.person = params.person;     
    this.kind = params.kind = RecordKinds.holiday; // this.kinds.holiday;
    this.hours = params.hours || 8;
    
    if(!this.date)
        throw Error("Param \"date\" must be defined.");
    
};


module.exports = Record;