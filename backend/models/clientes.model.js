import {Schema, model} from "mongoose";

const esquemaCliente = new Schema({
    nombre:{
        type:String
    },
    edad:{
        type:Number
    }
})
export const modeloCliente = new model("Tabla Clientes ", esquemaCliente)