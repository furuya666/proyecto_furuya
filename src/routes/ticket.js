import { Router } from 'express';
import ticketControllers from '../controllers/ticket.controllers.js';
const router = Router();
router.get('/tickets', ticketControllers.getTicket);
router.get('/ticket/:id', ticketControllers.getTicketById);
router.post('/ticket', ticketControllers.postTicket);
router.put('/ticket/:id', ticketControllers.putTicket);
router.delete('/ticket/:id', ticketControllers.deleteTicket);
export default router;