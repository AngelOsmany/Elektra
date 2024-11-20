import { modeloCliente } from "../models/clientes.model.js";

modeloCliente.create({
    nombre:"Josue",
    edad:21
})

export const testCliente = ()=>{
    console.log("El controlador de clientes funciona")
} 