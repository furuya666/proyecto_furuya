import mongoose from "mongoose";
const jefe_areaSchema = mongoose.Schema({
    nombre: String,
    telefono: String,
    correo: String

});
export default mongoose.model('Jefe_Area', jefe_areaSchema)