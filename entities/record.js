
require("../entities/person");

function Record (params) {
    
    //this.kinds = {holiday:"holiday", permit:"permit"};
    
    var params = params || {};
    this.insertDate = new Date();
    this.date = params.date;
    this.person = params.person;     
    this.kind = params.kind = RecordKinds.holiday; // this.kinds.holiday;
    this.hours = params.hours || 8;
    
};


module.export = Record;