//importando el modelo categoria
import Categoria from '../models/categoria.js';
const categoriaController = {
    //obtener lista de categorias
    getCategoria(req, res) {
        Categoria.find({}, (err, categoria) => {
            if (err || categoria === null) {
                return res.status(500).json({
                    ok: false,
                    message: "Error al listar categorias",

                })

            }
            return res.status(200).json({
                ok: true,
                message: "Lista de  categorias",
                categoria: categoria
            })

        })
    },
    //obtener un solo categoria por id
    getCategoriaById(req, res) {
        const id = req.params.id;
        Categoria.findById(id, (err, categoria) => {
            if (err || categoria === null) {
                return res.status(500).json({
                    ok: false,
                    message: "Error al buscar categoria"
                })
            }
            return res.status(200).json({
                ok: true,
                message: "Categoria",
                categoria: categoria
            })
        })
    },
    //crear nuevo categoria
    postCategoria(req, res) {
        const categoriaresivido = req.body;
        if (!categoriaresivido || Object.keys(categoriaresivido).length < 1) {
            return res.status(400).json({
                ok: false,
                message: "Parametros incompletos",
            })

        }
        const categoriaNuevo = new Categoria(categoriaresivido);
        categoriaNuevo.save((err, nuevoCategoria) => {
            if (err || nuevoCategoria === null) {
                return res.status(500).json({
                    ok: false,
                    message: "Error al crear categoria",

                })

            }
            return res.status(200).json({
                ok: true,
                message: "Categoria creado",
                categoria_nuevo: nuevoCategoria
            })

        })


    },
    //actualizacionde  una categoria
    putCategoria(req, res) {
        const id = req.params.id;
        const categoriaReceived = req.body;
        if (!categoriaReceived || Object.keys(categoriaReceived).length === 0) {
            return res.status(400).json({
                ok: false,
                message: "Parametros incompletos"
            })

        }
        Categoria.findById(id, (err, categoria) => {
            if (err || categoria === null) {
                return res.status(500).json({
                    ok: false,
                    message: "Error al encontrar la categoria"

                })
            }
            const newCategoria = { ...categoria._doc, ...categoriaReceived };
            Categoria.findByIdAndUpdate(id, newCategoria, (err, updatecategoria) => {
                if (err || updatecategoria === null) {
                    return res.status(500).json({
                        ok: false,
                        message: "Error al actualizar la categoria",

                    })

                }
                return res.status(200).json({
                    ok: true,
                    message: "Categoria actualizado",
                    antiguo_categoria: updatecategoria,
                    nuevo_categoria: newCategoria
                })
            })

        })
    },
    //eliminar categoria
    deleteCategoria(req, res) {
        const id = req.params.id;
        Categoria.findByIdAndDelete(id, (err, categoria) => {
            if (err || categoria === null) {
                return res.status(500).json({
                    ok: false,
                    message: "Error al eliminar  categoria"
                })
            }
            return res.status(200).json({
                ok: true,
                message: "Analista eliminado",
                eliminado_categoria: categoria
            })

        })

    }



}
export default categoriaController;