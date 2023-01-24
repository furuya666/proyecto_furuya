import Helpdesk from '../models/helpdesk.js';
const helpdeskControllers = {
    getHelpdesk(req, res) {
        Helpdesk.find({}, (err, helpdesk) => {
            if (err || helpdesk === null) {
                return res.status(500).json({
                    ok: false,
                    message: "Error al listar helpdesk"
                })

            }
            return res.status(200).json({
                ok: true,
                message: "Lista de Helpdesk",
                helpdesk: helpdesk
            })

        })

    },
    getHelpdeskById(req, res) {
        const id = req.params.id;
        Helpdesk.findById(id, (err, helpdesk) => {
            if (err || helpdesk === null) {
                return res.status(500).json({
                    ok: false,
                    message: "Error al buscar Helpdesk"
                })
            }
            return res.status(200).json({
                ok: true,
                message: "Helpdesk",
                helpdesk: helpdesk
            })

        })

    },
    postHelpdesk(req, res) {
        const helpdesk_recibido = req.body;
        if (!helpdesk_recibido || Object.keys(helpdesk_recibido).length < 3) {
            return res.status(400).json({
                ok: false,
                message: "Parametros imcompletos"
            })
        }
        const helpdesk_nuevo = new Helpdesk(helpdesk_recibido);
        helpdesk_nuevo.save((err, nuevoHelpdesk) => {
            if (err || nuevoHelpdesk === null) {
                return res.status(500).json({
                    ok: true,
                    message: "Error al crear Helpdesk"
                })

            }
            return res.status(200).json({
                ok: true,
                message: "Helpdesk creado",
                helpdesk_nuevo: nuevoHelpdesk
            })

        })

    },
    putHelpdesk(req, res) {
        const id = req.params.id;
        const helpdesk_resivido = req.body;
        if (!helpdesk_resivido || Object.keys(helpdesk_resivido).length === 0) {
            return res.status(400).json({
                ok: false,
                message: "Parametros incompletos"
            })

        }
        Helpdesk.findById(id, (err, helpdesk) => {
            if (err || helpdesk === null) {
                return res.status(500).json({
                    ok: false,
                    message: "Error al encontrar al helpdesk"
                })
            }
            const newHelpdesk = { ...helpdesk._doc, ...helpdesk_resivido };
            Helpdesk.findByIdAndUpdate(id, newHelpdesk, (err, updatehelpdesk) => {
                if (err || updatehelpdesk === null) {
                    return res.status(500).json({
                        ok: false,
                        message: "Error al actualizar helpdesk",

                    })

                }
                return res.status(200).json({
                    ok: true,
                    message: "Helpdesk actualizado",
                    antiguo_helpdesk: updatehelpdesk,
                    nuevo_helpdesk: newHelpdesk
                })
            })

        })


    },
    deleteHelpdesk(req, res) {
        const id = req.params.id;
        Helpdesk.findByIdAndDelete(id, (err, helpdesk) => {
            if (err || helpdesk === null) {
                return res.status(500).json({
                    ok: false,
                    message: "Error al eliminar helpdesk"
                })
            }
            return res.status(200).json({
                ok: true,
                message: "Helpdesk eliminado",
                eliminado_helpdesk: helpdesk
            })

        })

    }


}
export default helpdeskControllers;