const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    _id: String,  // Define _id como String
    name: String,
    price: Number
});

module.exports = mongoose.model('Product', ProductSchema);
