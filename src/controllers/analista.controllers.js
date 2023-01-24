//importando el modelo analista
import Analista from '../models/analista.js';
const analistaController = {
    //obtener lista de analistas
    getAnalista(req, res) {
        Analista.find({}, (err, analista) => {
            if (err || analista === null) {
                return res.status(500).json({
                    ok: false,
                    message: "Error al listar analistas",

                })

            }
            return res.status(200).json({
                ok: true,
                message: "Lista de  analistas",
                analistas: analista
            })

        })
    },
    //obtener un solo analista por id
    getAnalistasById(req, res) {
        const id = req.params.id;
        Analista.findById(id, (err, analista) => {
            if (err || analista === null) {
                return res.status(500).json({
                    ok: false,
                    message: "Error al buscar analista"
                })
            }
            return res.status(200).json({
                ok: true,
                message: "Analista",
                analista: analista
            })
        })
    },
    //crear nuevo analista
    postAnalista(req, res) {
        const analistaresivido = req.body;
        if (!analistaresivido || Object.keys(analistaresivido).length < 3) {
            return res.status(400).json({
                ok: false,
                message: "Parametros incompletos",
            })

        }
        const analistaNuevo = new Analista(analistaresivido);
        analistaNuevo.save((err, nuevoAnalista) => {
            if (err || nuevoAnalista === null) {
                return res.status(500).json({
                    ok: false,
                    message: "Error al crear analista",

                })

            }
            return res.status(200).json({
                ok: true,
                message: "Analista creado",
                analista_nuevo: nuevoAnalista
            })

        })


    },
    //actualizacionde  un analista
    putAnalista(req, res) {
        const id = req.params.id;
        const analistaReceived = req.body;
        if (!analistaReceived || Object.keys(analistaReceived).length === 0) {
            return res.status(400).json({
                ok: false,
                message: "Parametros incompletos"
            })

        }
        Analista.findById(id, (err, analista) => {
            if (err || analista === null) {
                return res.status(500).json({
                    ok: false,
                    message: "Error al encontrar al analista"

                })
            }
            const newAnalista = { ...analista._doc, ...analistaReceived };
            Analista.findByIdAndUpdate(id, newAnalista, (err, updateanalista) => {
                if (err || updateanalista === null) {
                    return res.status(500).json({
                        ok: false,
                        message: "Error al actualizar analista",

                    })

                }
                return res.status(200).json({
                    ok: true,
                    message: "Analista actualizado",
                    antiguo_analista: updateanalista,
                    nuevo_analista: newAnalista
                })
            })

        })
    },
    //eliminar analista
    deleteAnalista(req, res) {
        const id = req.params.id;
        Analista.findByIdAndDelete(id, (err, analista) => {
            if (err || analista === null) {
                return res.status(500).json({
                    ok: false,
                    message: "Error al eliminar  analista"
                })
            }
            return res.status(200).json({
                ok: true,
                message: "Analista eliminado",
                eliminado_analista: analista
            })

        })

    }



}
export default analistaController;