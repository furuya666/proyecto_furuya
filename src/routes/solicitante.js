import { Router } from 'express';
import solicitanteControllers from '../controllers/solicitante.controllers.js';
const router = Router();
router.get('/solicitantes', solicitanteControllers.getSolicitante);
router.get('/solicitante/:id', solicitanteControllers.getSolicitanteById);
router.post('/solicitante', solicitanteControllers.postSolicitante);
router.put('/solicitante/:id', solicitanteControllers.putSolicitante);
router.delete('/solicitante/:id', solicitanteControllers.deleteSolicitante);
export default router;