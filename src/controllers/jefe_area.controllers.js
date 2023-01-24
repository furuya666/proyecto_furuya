import JefeArea from '../models/jefe_area.js';
const jefe_areaControllers = {
    //obtener lista de jefes de area
    getJefeArea(req, res) {
        JefeArea.find({}, (err, jefearea) => {
            if (err || jefearea === null) {
                return res.status(500).json({
                    ok: false,
                    message: "Error al listar jefes de area"
                })

            }
            return res.status(200).json({
                ok: true,
                message: "Lista de jefes",
                jefes_area: jefearea
            })

        })

    },
    //obtener  un jefe d e area por id
    getJefeAreaById(req, res) {
        const id = req.params.id;
        JefeArea.findById(id, (err, jefearea) => {
            if (err || jefearea === null) {
                return res.status(500).json({
                    ok: false,
                    message: "Error al buscar jefe de area"
                })
            }
            return res.status(200).json({
                ok: true,
                message: "Jefe de area",
                jefe_area: jefearea
            })

        })

    },
    //crear un jefe de area
    postJefeArea(req, res) {
        const jefe_area_resivido = req.body;
        if (!jefe_area_resivido || Object.keys(jefe_area_resivido).length < 3) {
            return res.status(400).json({
                ok: false,
                message: "Parametros imcompletos"
            })
        }
        const jefe_area_nuevo = new JefeArea(jefe_area_resivido);
        jefe_area_nuevo.save((err, nuevoJefeArea) => {
            if (err || nuevoJefeArea === null) {
                return res.status(500).json({
                    ok: true,
                    message: "Erro al crear  jefe de area"
                })

            }
            return res.status(200).json({
                ok: true,
                message: "Jefe de area creado",
                jefe_area_nuevo: nuevoJefeArea
            })

        })

    },
    //actualizar jefe  de area
    putJefeArea(req, res) {
        const id = req.params.id;
        const jefe_area_resivido = req.body;
        if (!jefe_area_resivido || Object.keys(jefe_area_resivido).length === 0) {
            return res.status(400).json({
                ok: false,
                message: "Parametros incompletos"
            })

        }
        JefeArea.findById(id, (err, jefearea) => {
            if (err || jefearea === null) {
                return res.status(500).json({
                    ok: false,
                    message: "Error al encontrar al jefe de area"
                })
            }
            const newJefeArea = { ...jefearea._doc, ...jefe_area_resivido };
            JefeArea.findByIdAndUpdate(id, newJefeArea, (err, updatejefearea) => {
                if (err || updatejefearea === null) {
                    return res.status(500).json({
                        ok: false,
                        message: "Error al actualizar jefe de area",

                    })

                }
                return res.status(200).json({
                    ok: true,
                    message: "jefe de area actualizado",
                    antiguo_jefe_area: updatejefearea,
                    nuevo_jefe_area: newJefeArea
                })
            })

        })


    },
    //eliminar jefe de area
    deleteJefeArea(req, res) {
        const id = req.params.id;
        JefeArea.findByIdAndDelete(id, (err, jefearea) => {
            if (err || jefearea === null) {
                return res.status(500).json({
                    ok: false,
                    message: "Error al eliminar  jefe de area"
                })
            }
            return res.status(200).json({
                ok: true,
                message: "Jefe de area eliminado",
                eliminado_jefe_area: jefearea
            })

        })

    }


}
export default jefe_areaControllers;