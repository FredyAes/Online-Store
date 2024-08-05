const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    _id: String, // Usa String si tus IDs son cadenas
    products: [String], // Array de IDs de productos en formato String
    totalAmount: Number,
    status: String
});

module.exports = mongoose.model('Order', OrderSchema);
