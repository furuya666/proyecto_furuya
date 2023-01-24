import { Router } from 'express';
import analistaControllers from '../controllers/analista.controllers.js';
const router = Router();
router.get('/analistas', analistaControllers.getAnalista);
router.get('/analista/:id', analistaControllers.getAnalistasById);
router.post('/analista', analistaControllers.postAnalista);
router.put('/analista/:id', analistaControllers.putAnalista);
router.delete('/analista/:id', analistaControllers.deleteAnalista);
export default router;