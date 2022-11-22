import { Router } from 'express';
import solicitanteControllers from '../controllers/solicitante.controllers.js';
const router = Router();
router.get('/solicitante', solicitanteControllers.getSolicitante);
router.get('/solicitantess', solicitanteControllers.getSolicitantes);
export default router;