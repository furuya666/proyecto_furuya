import { Router } from 'express';
import categoriaControllers from '../controllers/categoria.controllers.js';
const router = Router();
router.get('/categorias', categoriaControllers.getCategoria);
router.get('/categoria/:id', categoriaControllers.getCategoriaById);
router.post('/categoria', categoriaControllers.postCategoria);
router.put('/categoria/:id', categoriaControllers.putCategoria);
router.delete('/categoria/:id', categoriaControllers.deleteCategoria);
export default router;