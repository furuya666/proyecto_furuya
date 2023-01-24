import { Router } from 'express';
import atencionControllers from '../controllers/atencion.controllers.js';
const router = Router();
router.get('/atenciones', atencionControllers.getAtencion);
router.get('/atencion/:id', atencionControllers.getAtencionById);
router.post('/atencion', atencionControllers.postAtencion);
router.put('/atencion/:id', atencionControllers.putAtencion);
router.delete('/atencion/:id', atencionControllers.deleteAtencion);
export default router;