// backend/models/cliente.js
const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  cedula: {
    type: String,
    required: true,
    unique: true,  // Asegura que no haya clientes con la misma cédula
  },
  nombre: {
    type: String,
    required: true,
  },
  sexo: {
    type: String,
    enum: ['Masculino', 'Femenino'],
    required: true,
  },
  fechaNacimiento: {
    type: Date,
    required: true,
  },
  direccion: {
    type: String,
    required: true,
  },
  telefono: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  tipoCliente: {
    type: String,
    enum: ['Nuevo', 'Casual', 'Permanente'],
    default: 'Nuevo', // Tipo de cliente por defecto
  },
  credito: {
    type: Number,
    default: 0, // Crédito disponible solo para clientes permanentes
  },
  fechaRegistro: {
    type: Date,
    default: Date.now,
  }
});

// Crear el modelo a partir del esquema
module.exports = mongoose.model('Cliente', clienteSchema);
