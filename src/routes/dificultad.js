import { Router } from 'express';
import dificultadControllers from '../controllers/dificultad.controllers.js';
const router = Router();
router.get('/dificultades', dificultadControllers.getDificultad);
router.get('/dificultad/:id', dificultadControllers.getDificultadById);
router.post('/dificultad', dificultadControllers.postDificultad);
router.put('/dificultad/:id', dificultadControllers.putDificultad);
router.delete('/dificultad/:id', dificultadControllers.deleteDificultad);
export default router;