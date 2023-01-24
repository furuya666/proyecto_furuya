import mongoose from "mongoose";
const helpdeskSchema = mongoose.Schema({
    nombre: String,
    correo: String,
    telefono: String
});
export default mongoose.model('Helpdesk', helpdeskSchema);