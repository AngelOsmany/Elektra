import { modeloProducto } from "../models/productos.model.js";

modeloProducto.create({
    nombre:"Coca cola",
    precio:20
})

export const testProducto = ()=>{
    console.log("El controlador de productos funciona")
}