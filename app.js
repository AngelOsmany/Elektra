import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import { testCliente } from "./backend/controllers/clientes.controller.js";
import { testEmpleado } from "./backend/controllers/empleados.controller.js";
import { testProducto } from "./backend/controllers/productos.controller.js";

dotenv.config();

mongoose.connect(process.env.url)
.then(()=>{
    console.log("Funciono la conexión a la base de datos")
})
.catch(()=>{
    console.log("No funciono la conexión a la base de datos")
})

const app = express();
app.use(cors());
app.listen(4000, ()=>{
    console.log("El servidor escucha cosas, esta esquizo")
})

testCliente()
testEmpleado()
testProducto()