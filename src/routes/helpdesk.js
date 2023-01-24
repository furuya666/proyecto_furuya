import { Router } from 'express';
import helpdeskControllers from '../controllers/helpdesk.controllers.js';
const router = Router();
router.get('/helpdesks', helpdeskControllers.getHelpdesk);
router.get('/helpdesk/:id', helpdeskControllers.getHelpdeskById);
router.post('/helpdesk', helpdeskControllers.postHelpdesk);
router.put('/helpdesk/:id', helpdeskControllers.putHelpdesk);
router.delete('/helpdesk/:id', helpdeskControllers.deleteHelpdesk);
export default router;