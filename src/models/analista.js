import mongoose from "mongoose";
const analistaSchema = mongoose.Schema({
    nombre: String,
    telefono: String,
    correo: email,
    celular: String

});
export default mongoose.model('Analista', analistaSchema)