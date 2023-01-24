//importando el modelo ticket
import Ticket from '../models/ticket.js';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs-extra';
const ticketController = {
    //obtener lista de ticket
    getTicket(req, res) {
        Ticket.find({}, (err, ticket) => {
            if (err || ticket === null) {
                return res.status(500).json({
                    ok: false,
                    message: "Error al listar tickets",

                })

            }
            return res.status(200).json({
                ok: true,
                message: "Lista de tickets",
                tickets: ticket
            })

        })
    },
    //obtener un solo ticket por id
    getTicketById(req, res) {
        const id = req.params.id;
        Ticket.findById(id, (err, ticket) => {
            if (err || ticket === null) {
                return res.status(500).json({
                    ok: false,
                    message: "Error al buscar ticket"
                })
            }
            return res.status(200).json({
                ok: true,
                message: "Ticket",
                ticket: ticket
            })
        })
    },
    //crear nuevo ticket
    postTicket(req, res) {
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).json({
                ok: false,
                message: "Debe subir un archivo",
            })
        }
        let documento = req.files.documento;
        const ticketresivido = req.body;
        if (!ticketresivido || Object.keys(ticketresivido).length < 3) {
            return res.status(400).json({
                ok: false,
                message: "Parametros incompletos",
            })

        }
        let fileName = '';
        if (documento.mimetype === 'image/png' || documento.mimetype === 'image/jpg' || documento.mimetype === 'image/pdf') {
            const path = `./uploads${req.baseUrl}`;
            const fileExtension = documento.mimetype.split('/')[1];
            fileName = `${uuidv4()}.${fileExtension}`;
            fs.ensureDir(path);
            documento.mv(`${path}/${fileName}`, function (err) {
                if (err)
                    return res.status(500).json({
                        ok: false,
                        message: "Error al guardar archivo",

                    })
            });
        } else {
            return res.status(400).json({
                ok: false,
                message: "No es un archivo compatible",
                ss: image.mimetype
            })

        }
        const ticketNuevo = new Ticket(ticketresivido);
        ticketNuevo.documento = fileName;
        ticketNuevo.save((err, nuevoticket) => {
            if (err || nuevoticket === null) {
                return res.status(500).json({
                    ok: false,
                    message: "Error al crear ticket",

                })

            }
            return res.status(200).json({
                ok: true,
                message: "Ticket creado",
                ticket_nuevo: nuevoticket
            })

        })


    },
    //actualizacion de  un ticket 
    putTicket(req, res) {
        const id = req.params.id;
        const ticketReceived = req.body;
        if ((!ticketReceived || Object.keys(ticketReceived).length === 0) && (!req.files || Object.keys(req.files).length === 0)) {
            return res.status(400).json({
                ok: false,
                message: "Nada que actualizar"
            })

        }
        Ticket.findById(id, (err, ticket) => {
            if (err || ticket === null) {
                return res.status(500).json({
                    ok: false,
                    message: "Error al encontrar al ticket"

                })
            }

            const newTicket = { ...ticket._doc, ...ticketReceived };
            if (req.files && Object.keys(req.files).length !== 0) {
                let documento = req.files.documento;
                if (documento.mimetype === 'image/png' || documento.mimetype === 'image/jpg' || documento.mimetype === 'image/pdf' || documento.mimetype === 'image/jpeg') {
                    const path = `./uploads${req.baseUrl}`;
                    const fileExtension = documento.mimetype.split('/')[1];

                    const fileName = `${uuidv4()}.${fileExtension}`;
                    fs.ensureDir(path);


                    documento.mv(`${path}/${fileName}`, function (err) {
                        if (err)
                            return res.status(500).json({
                                ok: false,
                                message: "Error al guardar archivo",

                            })
                    });
                    fs.remove(`${path}/${newTicket.documento}`);
                    newTicket.documento = fileName;
                } else {
                    return res.status(400).json({
                        ok: false,
                        message: "No es un archivo compatible",
                        documento: documento

                    })

                }

            }

            Ticket.findByIdAndUpdate(id, newTicket, (err, updateticket) => {
                if (err || updateticket === null) {
                    return res.status(500).json({
                        ok: false,
                        message: "Error al actualizar ticket",

                    })

                }
                return res.status(200).json({
                    ok: true,
                    message: "Ticket actualizado",
                    antiguo_ticket: updateticket,
                    nuevo_ticket: newTicket
                })
            })

        })
    },
    //eliminar ticket
    deleteTicket(req, res) {
        const id = req.params.id;
        Ticket.findByIdAndDelete(id, (err, ticket) => {
            if (err || ticket === null) {
                return res.status(500).json({
                    ok: false,
                    message: "Error al eliminar ticket"
                })
            }
            const path = `./uploads${req.baseUrl}`;
            fs.remove(`${path}/${ticket.documento}`);
            return res.status(200).json({
                ok: true,
                message: "Ticket eliminado",
                eliminado_ticket: ticket
            })

        })

    }



}
/////https://morioh.com/p/fbb7dbc12ea7
export default ticketController;