// URL base de la API
const API_URL = 'http://localhost:5000/api';

// Función para cargar los productos desde la API
function loadProducts() {
    fetch(`${API_URL}/productos`)
        .then(response => response.json())
        .then(data => {
            const menuItemsContainer = document.getElementById('menu-items');
            const productSelect = document.getElementById('producto');

            data.forEach(product => {
                // Crear un div para mostrar el producto
                const productDiv = document.createElement('div');
                productDiv.classList.add('menu-item');

                // Crear la imagen del producto
                const productImage = document.createElement('img');
                productImage.src = product.imagen;
                productDiv.appendChild(productImage);

                // Crear el nombre del producto
                const productName = document.createElement('h3');
                productName.textContent = product.nombre;
                productDiv.appendChild(productName);

                // Crear el precio
                const productPrice = document.createElement('p');
                productPrice.textContent = `Precio: $${product.precio}`;
                productDiv.appendChild(productPrice);

                // Agregar el producto al contenedor
                menuItemsContainer.appendChild(productDiv);

                // Agregar el producto al select de pedidos
                const option = document.createElement('option');
                option.value = product._id;
                option.textContent = `${product.nombre} - $${product.precio}`;
                productSelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error al cargar los productos:', error));
}

// Función para manejar el envío de pedidos
function handleOrderSubmit(event) {
    event.preventDefault();

    const cliente = document.getElementById('cliente').value;
    const productoId = document.getElementById('producto').value;
    const cantidad = document.getElementById('cantidad').value;

    // Enviar el pedido a la API
    const orderData = {
        cliente: cliente,
        productoId: productoId,
        cantidad: cantidad,
    };

    fetch(`${API_URL}/pedidos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
    })
        .then(response => response.json())
        .then(data => {
            alert('Pedido realizado con éxito');
            document.getElementById('order-form').reset();
        })
        .catch(error => console.error('Error al realizar el pedido:', error));
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();  // Cargar los productos cuando la página esté lista
    document.getElementById('order-form').addEventListener('submit', handleOrderSubmit);
});
