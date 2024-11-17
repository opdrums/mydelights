// backend/routes/productoRoutes.js
const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');

// Crear un nuevo producto
router.post('/productos', productosController.crearProducto);

// Obtener todos los productos
router.get('/productos', productosController.obtenerProductos);

// Obtener un producto por su ID
router.get('/productos/:id', productosController.obtenerProductoPorId);

// Actualizar un producto (por ejemplo, cambiar el precio o disponibilidad)
router.put('/productos/:id', productosController.actualizarProducto);

// Eliminar un producto
router.delete('/productos/:id', productosController.eliminarProducto);

module.exports = router;
