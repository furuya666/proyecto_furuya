import Solicitante from '../models/solicitante.js';
const solicitanteControllers = {
    getSolicitante(req, res) {
        Solicitante.find({}, (err, solicitante) => {
            if (err || solicitante === null) {
                return res.status(500).json({
                    ok: false,
                    message: "Error al listar solicitante"
                })

            }
            return res.status(200).json({
                ok: true,
                message: "Lista de solicitantes",
                solicitante: solicitante
            })

        })

    },
    getSolicitanteById(req, res) {
        const id = req.params.id;
        Solicitante.findById(id, (err, solicitante) => {
            if (err || solicitante === null) {
                return res.status(500).json({
                    ok: false,
                    message: "Error al buscar solicitante"
                })
            }
            return res.status(200).json({
                ok: true,
                message: "Solicitante",
                solicitnate: solicitante
            })

        })

    },
    postSolicitante(req, res) {
        const solicitante_resivido = req.body;
        if (!solicitante_resivido || Object.keys(solicitante_resivido).length < 3) {
            return res.status(400).json({
                ok: false,
                message: "Parametros imcompletos"
            })
        }
        const solicitante_nuevo = new Solicitante(solicitante_resivido);
        solicitante_nuevo.save((err, nuevoSolicitante) => {
            if (err || nuevoSolicitante === null) {
                return res.status(500).json({
                    ok: true,
                    message: "Error al crear solicitante"
                })

            }
            return res.status(200).json({
                ok: true,
                message: "Solicitante creado",
                solicitante_nuevo: nuevoSolicitante
            })

        })

    },
    putSolicitante(req, res) {
        const id = req.params.id;
        const solicitante_resivido = req.body;
        if (!solicitante_resivido || Object.keys(solicitante_resivido).length === 0) {
            return res.status(400).json({
                ok: false,
                message: "Parametros incompletos"
            })

        }
        Solicitante.findById(id, (err, solicitante) => {
            if (err || solicitante === null) {
                return res.status(500).json({
                    ok: false,
                    message: "Error al encontrar al solicitante"
                })
            }
            const newSolicitante = { ...solicitante._doc, ...solicitante_resivido };
            Solicitante.findByIdAndUpdate(id, newSolicitante, (err, updatesolicitante) => {
                if (err || updatesolicitante === null) {
                    return res.status(500).json({
                        ok: false,
                        message: "Error al actualizar solicitante",

                    })

                }
                return res.status(200).json({
                    ok: true,
                    message: "Solicitante actualizado",
                    antiguo_solicitante: updatesolicitante,
                    nuevo_solicitante: newSolicitante
                })
            })

        })


    },
    deleteSolicitante(req, res) {
        const id = req.params.id;
        Solicitante.findByIdAndDelete(id, (err, solicitante) => {
            if (err || solicitante === null) {
                return res.status(500).json({
                    ok: false,
                    message: "Error al eliminar solicitante"
                })
            }
            return res.status(200).json({
                ok: true,
                message: "Solicitante eliminado",
                eliminado_solicitante: solicitante
            })

        })

    }


}
export default solicitanteControllers;