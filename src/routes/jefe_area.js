import { Router } from 'express';
import jefe_areaControllers from '../controllers/jefe_area.controllers.js';
const router = Router();
router.get('/jefe_area', jefe_areaControllers.getJefe_area);
export default router;