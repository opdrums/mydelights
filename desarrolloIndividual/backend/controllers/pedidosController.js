// backend/controllers/pedidosController.js
const Pedido = require("../models/pedido");
const Cliente = require("../models/cliente");
const Producto = require("../models/producto");

// Crear un nuevo pedido
exports.crearPedido = async (req, res) => {
  try {
    const { clienteId, productos, direccionEntrega, esEntrega } = req.body;

    // Verificar si el cliente existe
    const cliente = await Cliente.findById(clienteId);
    if (!cliente) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }

    // Verificar si los productos existen
    const productosEncontrados = await Producto.find({ _id: { $in: productos.map(p => p.productoId) } });
    if (productosEncontrados.length !== productos.length) {
      return res.status(400).json({ message: "Algunos productos no fueron encontrados" });
    }

    // Crear un nuevo pedido
    const nuevoPedido = new Pedido({
      clienteId,
      productos,
      direccionEntrega,
      esEntrega, // True si es entrega a domicilio
      total: productos.reduce((total, prod) => total + prod.precio * prod.cantidad, 0),
    });

    // Guardar el pedido
    await nuevoPedido.save();
    res.status(201).json(nuevoPedido); // Responder con el pedido creado
  } catch (error) {
    res.status(400).json({ message: "Error al crear el pedido", error });
  }
};

// Obtener todos los pedidos
exports.obtenerPedidos = async (req, res) => {
  try {
    const pedidos = await Pedido.find().populate("clienteId").populate("productos.productoId"); // Obtener pedidos con detalles
    res.status(200).json(pedidos); // Responder con la lista de pedidos
  } catch (error) {
    res.status(400).json({ message: "Error al obtener los pedidos", error });
  }
};

// Obtener un pedido por ID
exports.obtenerPedidoPorId = async (req, res) => {
  try {
    const pedido = await Pedido.findById(req.params.id).populate("clienteId").populate("productos.productoId");
    if (!pedido) {
      return res.status(404).json({ message: "Pedido no encontrado" });
    }
    res.status(200).json(pedido); // Responder con el pedido
  } catch (error) {
    res.status(400).json({ message: "Error al obtener el pedido", error });
  }
};

// Modificar un pedido
exports.modificarPedido = async (req, res) => {
  try {
    const pedidoModificado = await Pedido.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!pedidoModificado) {
      return res.status(404).json({ message: "Pedido no encontrado" });
    }
    res.status(200).json(pedidoModificado); // Responder con el pedido modificado
  } catch (error) {
    res.status(400).json({ message: "Error al modificar el pedido", error });
  }
};

// Eliminar un pedido
exports.eliminarPedido = async (req, res) => {
  try {
    const pedidoEliminado = await Pedido.findByIdAndDelete(req.params.id);
    if (!pedidoEliminado) {
      return res.status(404).json({ message: "Pedido no encontrado" });
    }
    res.status(200).json({ message: "Pedido eliminado correctamente" }); // Responder con éxito
  } catch (error) {
    res.status(400).json({ message: "Error al eliminar el pedido", error });
  }
};
