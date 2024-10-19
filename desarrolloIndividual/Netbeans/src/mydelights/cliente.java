package com.mydelights;

public class Cliente {
    private String numeroCedula;
    private String sexo;
    private String fechaNacimiento;
    private String direccion;
    private String telefono;
    private String correo;

    // Constructor
    public Cliente(String numeroCedula, String sexo, String fechaNacimiento, String direccion, String telefono, String correo) {
        this.numeroCedula = numeroCedula;
        this.sexo = sexo;
        this.fechaNacimiento = fechaNacimiento;
        this.direccion = direccion;
        this.telefono = telefono;
        this.correo = correo;
    }

    // Getters y Setters
    // ...
}
