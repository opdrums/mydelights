// backend/routes/pedidoRoutes.js
const express = require('express');
const router = express.Router();
const pedidosController = require('../controllers/pedidosController');

// Crear un nuevo pedido
router.post('/pedidos', pedidosController.crearPedido);

// Obtener todos los pedidos
router.get('/pedidos', pedidosController.obtenerPedidos);

// Obtener un pedido por su ID
router.get('/pedidos/:id', pedidosController.obtenerPedidoPorId);

// Actualizar un pedido (por ejemplo, cambiar el estado)
router.put('/pedidos/:id', pedidosController.actualizarPedido);

// Eliminar un pedido
router.delete('/pedidos/:id', pedidosController.eliminarPedido);

module.exports = router;
