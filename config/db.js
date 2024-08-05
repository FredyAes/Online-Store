const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Cargar las variables de entorno
dotenv.config();

// URL de conexión a MongoDB desde el archivo .env
const db = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(db);
        console.log('MongoDB Connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
