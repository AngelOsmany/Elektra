import {Schema, model} from "mongoose";

const esquemaProducto = new Schema({
    nombre:{
        type:String
    },
    precio:{
        type:Number
    }
})

export const modeloProducto = new model("Tabla de productos", esquemaProducto)