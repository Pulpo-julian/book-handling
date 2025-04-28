import { Request, Response, NextFunction } from "express";
import { CrearModelos } from "../utils/CrearModelos";
import { PrestamoService } from "../services/PrestamoService";
import { Borrow } from "../types/Borrow";

export class PrestamoController {
    static async crearPrestamo(req:Request, res:Response, next:NextFunction) {
        try {
            const prestamo:Borrow = CrearModelos.crearPrestamo(req);
            const prestamoNuevo = await PrestamoService.crearPrestamo(prestamo);
            res.status(200).json({
                success: true,
                data: prestamoNuevo
            })
        } catch(err) {
            next(err)
        }
    }
}