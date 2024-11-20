import { modeloEmpleado } from "../models/empleados.model.js";

modeloEmpleado.create({
    nombre:"Osmany",
    edad:22,
    puesto:"CEO",
    sueldo:500000
})

export const testEmpleado = ()=>{
    console.log("El controlador de empleados funciona")
}