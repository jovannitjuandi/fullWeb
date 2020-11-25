// JavaScript Document
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Schema
const itemSchema = new Schema({
	name: {
		type: String,
		required: true
	}, 
	currentTemp:  {
		type: Number
	},
	lowTemp: {
		type: Number
	}, 
	highTemp: {
		type: Number
	},
	clicked: {
		type: Boolean,
		default: false
	}
});

module.exports = Item = mongoose.model('item', itemSchema);