import { Router } from 'express';
import analistaControllers from '../controllers/analista.controllers.js';
const router = Router();
router.get('/analista', analistaControllers.getAnalista);
router.post('/analistas', analistaControllers.getAnalistas);
export default router;