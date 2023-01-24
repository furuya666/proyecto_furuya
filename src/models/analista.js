import mongoose from "mongoose";
const analistaSchema = mongoose.Schema({
    nombre: String,
    telefono: String,
    correo: String,
    celular: String

});
export default mongoose.model('Analista', analistaSchema)