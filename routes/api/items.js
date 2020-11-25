// JavaScript Document
const express = require('express');
const router = express.Router();

// Item model
const Item = require('../../models/weather');

// @route 	GET api/items
// @desc 	Get All Items
// @sccess 	Public
router.get('/', (req, res) => {
	Item.find().then(items => res.json(items))
});

// @route 	POST api/items
// @desc 	POST An Items
// @sccess 	Public
router.post('/', (req, res) => {
	const newItem = new Item({
		name: req.body.name
	});
	newItem.save().then(item => res.json(item));
});

// @route 	DELETE api/items
// @desc 	DELETE An Items
// @sccess 	Public
router.delete('/:id', (req, res) => {
	Item.findById(req.params.id).then(item => item.remove().then(() => res.json({success:true}))).catch(err => res.status(404).json({success:false}));
});

module.exports = router;