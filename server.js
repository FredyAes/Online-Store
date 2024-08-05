require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware
app.use(express.json());
app.use(cors()); // Asegúrate de tener cors instalado

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI) // Eliminar las opciones obsoletas
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log('MongoDB connection error:', err));

// Rutas
const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/orders'); // Agrega esta línea
app.use('/products', productRoutes);
app.use('/orders', orderRoutes); // Agrega esta línea

// Iniciar el servidor
app.listen(port, () => console.log(`Server running on port ${port}`));
