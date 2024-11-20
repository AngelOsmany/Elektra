import {Schema, model} from "mongoose";

const esquemaEmpleado = new Schema({
    nombre:{
        type:String
    },
    edad:{
        type:Number
    },
    puesto:{
        type:String
    },
    sueldo:{
        type:Number
    }
})
export const modeloEmpleado = new model("Tabla de empleados", esquemaEmpleado)