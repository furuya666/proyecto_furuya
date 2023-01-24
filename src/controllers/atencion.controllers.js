//importando el modelo atencion
import Atencion from '../models/atencion.js';
const atencionController = {
    //obtener lista de atenciones
    getAtencion(req, res) {
        Atencion.find({}, (err, atencion) => {
            if (err || atencion === null) {
                return res.status(500).json({
                    ok: false,
                    message: "Error al listar atenciones",

                })

            }
            return res.status(200).json({
                ok: true,
                message: "Lista de atenciones",
                atencion: atencion
            })

        })
    },
    //obtener un solo atencion por id
    getAtencionById(req, res) {
        const id = req.params.id;
        Atencion.findById(id, (err, atencion) => {
            if (err || atencion === null) {
                return res.status(500).json({
                    ok: false,
                    message: "Error al buscar atencion"
                })
            }
            return res.status(200).json({
                ok: true,
                message: "Atencion",
                atencion: atencion
            })
        })
    },
    //crear nuevo atencion
    postAtencion(req, res) {
        const atencionresivido = req.body;
        if (!atencionresivido || Object.keys(atencionresivido).length < 1) {
            return res.status(400).json({
                ok: false,
                message: "Parametros incompletos",
            })

        }
        const atencionNuevo = new Atencion(atencionresivido);
        atencionNuevo.save((err, nuevoAtencion) => {
            if (err || nuevoAtencion === null) {
                return res.status(500).json({
                    ok: false,
                    message: "Error al crear atencion",

                })

            }
            return res.status(200).json({
                ok: true,
                message: "Atencion creado",
                atencion_nuevo: nuevoAtencion
            })

        })


    },
    //actualizacion de una atencion
    putAtencion(req, res) {
        const id = req.params.id;
        const atencionReceived = req.body;
        if (!atencionReceived || Object.keys(atencionReceived).length === 0) {
            return res.status(400).json({
                ok: false,
                message: "Parametros incompletos"
            })

        }
        Atencion.findById(id, (err, atencion) => {
            if (err || atencion === null) {
                return res.status(500).json({
                    ok: false,
                    message: "Error al encontrar la atencion"

                })
            }
            const newAtencion = { ...atencion._doc, ...atencionReceived };
            Atencion.findByIdAndUpdate(id, newAtencion, (err, updateatencion) => {
                if (err || updateatencion === null) {
                    return res.status(500).json({
                        ok: false,
                        message: "Error al actualizar la atencion",

                    })

                }
                return res.status(200).json({
                    ok: true,
                    message: "Atencion actualizado",
                    antiguo_atencion: updateatencion,
                    nuevo_atencion: newAtencion
                })
            })

        })
    },
    //eliminar atencion
    deleteAtencion(req, res) {
        const id = req.params.id;
        Atencion.findByIdAndDelete(id, (err, atencion) => {
            if (err || atencion === null) {
                return res.status(500).json({
                    ok: false,
                    message: "Error al eliminar  atencion"
                })
            }
            return res.status(200).json({
                ok: true,
                message: "Atencion eliminado",
                eliminado_atencion: atencion
            })

        })

    }



}
export default atencionController;