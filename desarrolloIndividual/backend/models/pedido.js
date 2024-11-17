// backend/models/pedido.js
const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema({
  clienteId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cliente',
    required: true,
  },
  productos: [
    {
      productoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Producto',
        required: true,
      },
      cantidad: {
        type: Number,
        required: true,
      },
      precio: {
        type: Number,
        required: true,
      },
    },
  ],
  direccionEntrega: {
    type: String,
    required: true,
  },
  esEntrega: {
    type: Boolean,
    default: false,  // Si es entrega a domicilio
  },
  total: {
    type: Number,
    required: true,
  },
  estado: {
    type: String,
    enum: ['Pendiente', 'En preparación', 'Entregado', 'Cancelado'],
    default: 'Pendiente',
  },
  fechaPedido: {
    type: Date,
    default: Date.now,
  }
});

// Crear el modelo a partir del esquema
module.exports = mongoose.model('Pedido', pedidoSchema);
