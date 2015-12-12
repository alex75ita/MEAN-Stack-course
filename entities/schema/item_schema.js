var mongoose = require("mongoose");

module.exports = new mongoose.Schema(
	{
		insertDate: {
			type: Date,
			required: true
		},
		date: {
			type: Date,
			required: true
		},
		person: {
			type: mongoose.Schema.Typrs.ObjectId,
			ref: "Person",
			requred: true
		},
		kind: {			
			type: String,
			required: true
		},
		hours: {
			type: Number,
			required: true
		}
		
	}
	
);