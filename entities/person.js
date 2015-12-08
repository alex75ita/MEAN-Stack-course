"use strict";

function Person(name) {	
	
	var _name = name || "undefined";
	
	return {	
		name:function(name) {
			if(name)
				_name = name;
			else
				return _name;		
		}	
	}
};

module.exports = Person;