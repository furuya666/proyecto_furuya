//importando el modelo dificultad
import Dificultad from '../models/dificultad.js';
const dificultadController = {
    //obtener lista de dificultades
    getDificultad(req, res) {
        Dificultad.find({}, (err, dificultad) => {
            if (err || dificultad === null) {
                return res.status(500).json({
                    ok: false,
                    message: "Error al listar dificultades",

                })

            }
            return res.status(200).json({
                ok: true,
                message: "Lista de dificultades",
                dificultad: dificultad
            })

        })
    },
    //obtener un solo dificultad por id
    getDificultadById(req, res) {
        const id = req.params.id;
        Dificultad.findById(id, (err, dificultad) => {
            if (err || dificultad === null) {
                return res.status(500).json({
                    ok: false,
                    message: "Error al buscar dificultad"
                })
            }
            return res.status(200).json({
                ok: true,
                message: "Dificultad",
                dificultad: dificultad
            })
        })
    },
    //crear nuevo dificultad
    postDificultad(req, res) {
        const dificultadresivido = req.body;
        if (!dificultadresivido || Object.keys(dificultadresivido).length < 1) {
            return res.status(400).json({
                ok: false,
                message: "Parametros incompletos",
            })

        }
        const dificultadNuevo = new Dificultad(dificultadresivido);
        dificultadNuevo.save((err, nuevoDificultad) => {
            if (err || nuevoDificultad === null) {
                return res.status(500).json({
                    ok: false,
                    message: "Error al crear dificultad",

                })

            }
            return res.status(200).json({
                ok: true,
                message: "Dificultad creado",
                dificultad_nuevo: nuevoDificultad
            })

        })


    },
    //actualizacionde  una dificultad
    putDificultad(req, res) {
        const id = req.params.id;
        const dificultadReceived = req.body;
        if (!dificultadReceived || Object.keys(dificultadReceived).length === 0) {
            return res.status(400).json({
                ok: false,
                message: "Parametros incompletos"
            })

        }
        Dificultad.findById(id, (err, dificultad) => {
            if (err || dificultad === null) {
                return res.status(500).json({
                    ok: false,
                    message: "Error al encontrar la dificultad"

                })
            }
            const newDificultad = { ...dificultad._doc, ...dificultadReceived };
            Dificultad.findByIdAndUpdate(id, newDificultad, (err, updatedificultad) => {
                if (err || updatedificultad === null) {
                    return res.status(500).json({
                        ok: false,
                        message: "Error al actualizar la dificultad",

                    })

                }
                return res.status(200).json({
                    ok: true,
                    message: "Dificultad actualizado",
                    antiguo_dificultad: updatedificultad,
                    nuevo_dificultad: newDificultad
                })
            })

        })
    },
    //eliminar dificultad
    deleteDificultad(req, res) {
        const id = req.params.id;
        Dificultad.findByIdAndDelete(id, (err, dificultad) => {
            if (err || dificultad === null) {
                return res.status(500).json({
                    ok: false,
                    message: "Error al eliminar dificultad"
                })
            }
            return res.status(200).json({
                ok: true,
                message: "Dificultad eliminado",
                eliminado_dificultad: dificultad
            })

        })

    }



}
export default dificultadController;