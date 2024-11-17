// backend/models/producto.js
const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  categoria: {
    type: String,
    enum: ['Plato a la carta', 'Comida corriente', 'Bebidas', 'Postre', 'Eventos'],
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  imagenUrl: {
    type: String,
    required: true,  // URL de la imagen del producto
  },
  ingredientes: {
    type: [String],
    required: true,
  },
  disponibilidad: {
    type: Boolean,
    default: true, // Si está disponible en el menú
  },
  fechaAgregado: {
    type: Date,
    default: Date.now,
  }
});

// Crear el modelo a partir del esquema
module.exports = mongoose.model('Producto', productoSchema);
