package com.mydelights;

import java.util.ArrayList;

public class Pedido {
    private int idPedido;
    private Cliente cliente;
    private ArrayList<Producto> productos;
    private double total;
    private boolean esDomicilio;

    // Constructor
    public Pedido(int idPedido, Cliente cliente, boolean esDomicilio) {
        this.idPedido = idPedido;
        this.cliente = cliente;
        this.productos = new ArrayList<>();
        this.total = 0.0;
        this.esDomicilio = esDomicilio;
    }

    public void agregarProducto(Producto producto) {
        productos.add(producto);
        total += producto.getPrecio();
    }

    public double calcularTotal() {
        if (esDomicilio) {
            total *= 1.02; // Añadir 2% por entrega
        }
        return total;
    }
}
