import mongoose from "mongoose";
const atencionSchema = mongoose.Schema({
    tipo: String


});
export default mongoose.model('Atencion', atencionSchema)