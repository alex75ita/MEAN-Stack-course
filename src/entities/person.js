"use strict";

function Person(name) {	
	
	var _name = name || "undefined";
	
	return {	
		name: _name,
		
		setName: function(name) {
			if(name)
				_name = name;
			else
				throw(Error('"name" must be defined'));		
		}	
	}
};

module.exports = Person;