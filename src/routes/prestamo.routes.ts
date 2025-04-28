import { Router } from "express";
import { PrestamoController } from "../controllers/PrestamoController";

const router = Router();

router.post('/prestamo/crear', PrestamoController.crearPrestamo);

export default router;