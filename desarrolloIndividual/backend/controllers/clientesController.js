// backend/controllers/clientesController.js
const Cliente = require("../models/cliente");

// Crear un nuevo cliente
exports.crearCliente = async (req, res) => {
  try {
    const nuevoCliente = new Cliente(req.body);
    await nuevoCliente.save();
    res.status(201).json(nuevoCliente); // Responder con el cliente creado
  } catch (error) {
    res.status(400).json({ message: "Error al crear el cliente", error });
  }
};

// Obtener todos los clientes
exports.obtenerClientes = async (req, res) => {
  try {
    const clientes = await Cliente.find(); // Buscar todos los clientes
    res.status(200).json(clientes); // Responder con la lista de clientes
  } catch (error) {
    res.status(400).json({ message: "Error al obtener los clientes", error });
  }
};

// Obtener un cliente por su ID
exports.obtenerClientePorId = async (req, res) => {
  try {
    const cliente = await Cliente.findById(req.params.id); // Buscar cliente por ID
    if (!cliente) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }
    res.status(200).json(cliente); // Responder con el cliente
  } catch (error) {
    res.status(400).json({ message: "Error al obtener el cliente", error });
  }
};

// Modificar un cliente
exports.modificarCliente = async (req, res) => {
  try {
    const clienteModificado = await Cliente.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // Retorna el cliente actualizado
    );
    if (!clienteModificado) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }
    res.status(200).json(clienteModificado); // Responder con el cliente modificado
  } catch (error) {
    res.status(400).json({ message: "Error al modificar el cliente", error });
  }
};

// Eliminar un cliente
exports.eliminarCliente = async (req, res) => {
  try {
    const clienteEliminado = await Cliente.findByIdAndDelete(req.params.id); // Eliminar cliente por ID
    if (!clienteEliminado) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }
    res.status(200).json({ message: "Cliente eliminado correctamente" }); // Responder con éxito
  } catch (error) {
    res.status(400).json({ message: "Error al eliminar el cliente", error });
  }
};
