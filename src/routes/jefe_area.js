import { Router } from 'express';
import jefe_areaControllers from '../controllers/jefe_area.controllers.js';
const router = Router();
router.get('/jefes_area', jefe_areaControllers.getJefeArea);
router.get('/jefe_area/:id', jefe_areaControllers.getJefeAreaById);
router.post('/jefe_area', jefe_areaControllers.postJefeArea);
router.put('/jefe_area/:id', jefe_areaControllers.putJefeArea);
router.delete('/jefe_area/:id', jefe_areaControllers.deleteJefeArea);

export default router;