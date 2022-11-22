import mongoose from "mongoose";
const jefe_areaSchema = mongoose.Schema({
    nombre: String,
    telefono: String,
    correo: email

});
export default mongoose.model('Jefe_Area', jefe_areaSchema)