// backend/controllers/productosController.js
const Producto = require("../models/producto");

// Crear un nuevo producto
exports.crearProducto = async (req, res) => {
  try {
    const nuevoProducto = new Producto(req.body);
    await nuevoProducto.save();
    res.status(201).json(nuevoProducto); // Responder con el producto creado
  } catch (error) {
    res.status(400).json({ message: "Error al crear el producto", error });
  }
};

// Obtener todos los productos
exports.obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.find(); // Obtener todos los productos
    res.status(200).json(productos); // Responder con la lista de productos
  } catch (error) {
    res.status(400).json({ message: "Error al obtener los productos", error });
  }
};

// Obtener un producto por ID
exports.obtenerProductoPorId = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id); // Buscar producto por ID
    if (!producto) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.status(200).json(producto); // Responder con el producto
  } catch (error) {
    res.status(400).json({ message: "Error al obtener el producto", error });
  }
};

// Modificar un producto
exports.modificarProducto = async (req, res) => {
  try {
    const productoModificado = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!productoModificado) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.status(200).json(productoModificado); // Responder con el producto modificado
  } catch (error) {
    res.status(400).json({ message: "Error al modificar el producto", error });
  }
};

// Eliminar un producto
exports.eliminarProducto = async (req, res) => {
  try {
    const productoEliminado = await Producto.findByIdAndDelete(req.params.id); // Eliminar producto por ID
    if (!productoEliminado) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.status(200).json({ message: "Producto eliminado correctamente" }); // Responder con éxito
  } catch (error) {
    res.status(400)
    }
}
