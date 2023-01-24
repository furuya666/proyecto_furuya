import mongoose from "mongoose";
const solicitanteSchema = mongoose.Schema({
    nombre: String,
    correo: String,
    telefono: String
});
export default mongoose.model('Solicitante', solicitanteSchema);