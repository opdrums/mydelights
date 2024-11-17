// backend/routes/clienteRoutes.js
const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientesController');

// Crear un nuevo cliente
router.post('/clientes', clientesController.crearCliente);

// Obtener todos los clientes
router.get('/clientes', clientesController.obtenerClientes);

// Obtener un cliente por su cédula
router.get('/clientes/:cedula', clientesController.obtenerClientePorCedula);

// Actualizar datos de un cliente
router.put('/clientes/:cedula', clientesController.actualizarCliente);

// Eliminar un cliente por su cédula
router.delete('/clientes/:cedula', clientesController.eliminarCliente);

module.exports = router;
