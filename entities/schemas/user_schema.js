var mongoos = require("mongoose");

module.exports = new mongoose.Schema({
	name: {
		type: String,
		required: true		
	},
	email: {
		type: String,	
		requireds: true
	}	
});