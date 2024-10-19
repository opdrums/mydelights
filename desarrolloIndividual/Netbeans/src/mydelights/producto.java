package com.mydelights;

public class Producto {
    private String nombre;
    private double precio;
    private String descripcion;

    // Constructor
    public Producto(String nombre, double precio, String descripcion) {
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
    }

    // Getters y Setters
    public String getNombre() {
        return nombre;
    }

    public double getPrecio() {
        return precio;
    }
}
