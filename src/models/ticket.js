import mongoose from "mongoose";
const ticketSchema = mongoose.Schema({
    nombre: String,
    documento: String,
    cod_analista: String,
    cod_solicitante: String
});

export default mongoose.model('Ticket', ticketSchema);