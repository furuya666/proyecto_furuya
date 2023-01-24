import mongoose from "mongoose";
const categoriaSchema = mongoose.Schema({
    tipo: String


});
export default mongoose.model('Categoria', categoriaSchema)