import { Router } from "express";
import { LibroController } from "../controllers/LibroController";

const router = Router();

router.post('/libro/crear', LibroController.crearLibro);
router.post('/libro/actualizar', LibroController.actualizarLibro);
router.delete('/libro/eliminar', LibroController.eliminarLibro);

export default router;