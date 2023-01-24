import mongoose from "mongoose";
const dificultadSchema = mongoose.Schema({
    tipo: String


});
export default mongoose.model('Dificultad', dificultadSchema)