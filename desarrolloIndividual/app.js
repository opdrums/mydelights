// Importación de módulos necesarios
require('dotenv').config(); // Cargar variables de entorno desde el archivo .env
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Importación de las rutas
const clienteRoutes = require('./backend/routes/clienteRoutes');
const pedidoRoutes = require('./backend/routes/pedidoRoutes');
const productoRoutes = require('./backend/routes/productoRoutes');

// Crear una aplicación Express
const app = express();

// Configuración de middleware
app.use(cors()); // Habilitar CORS para peticiones entre diferentes dominios
app.use(bodyParser.json()); // Parsear el cuerpo de las peticiones en formato JSON

// Conexión a la base de datos MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Conectado a la base de datos MongoDB'))
  .catch(err => console.log('Error al conectar a la base de datos:', err));

// Configuración de rutas
app.use('/api/clientes', clienteRoutes); // Ruta para gestionar clientes
app.use('/api/pedidos', pedidoRoutes); // Ruta para gestionar pedidos
app.use('/api/productos', productoRoutes); // Ruta para gestionar productos

// Ruta principal de prueba (puedes personalizarla)
app.get('/', (req, res) => {
  res.send('Bienvenido a la API de My Delights!');
});

// Manejo de errores 404 (cuando no se encuentra una ruta)
app.use((req, res) => {
  res.status(404).send('Ruta no encontrada');
});

// Establecer el puerto para escuchar peticiones
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
