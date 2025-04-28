import { Request, Response, NextFunction } from 'express';
import { Book } from '../types/Book';
import { LibroService } from '../services/LibroService';
import { CrearModelos } from '../utils/CrearModelos'; 

export class LibroController {

    static async crearLibro(req:Request, res:Response, next:NextFunction) {
        let libro = CrearModelos.crearLibro(req);
        try {
            const nuevo = await LibroService.crearLibro(libro);
            res.status(201).json({
                success: true,
                data: nuevo,
            });
        } catch (err) {
            next(err)
        }

    }

    static async actualizarLibro(req:Request, res:Response, next:NextFunction) {
        let libro = CrearModelos.crearLibro(req);
        try {
            const libroActualizado = await LibroService.actualizarLibro(libro);
            res.status(201).json({
                success: true,
                data: libroActualizado,
            });
        } catch (err) {
            next(err)
        }
    }

    static async eliminarLibro(req:Request, res:Response, next:NextFunction) {
        let id = req.body.id;
        try {
            const libroEliminado = await LibroService.eliminarLibro(id);
            res.status(201).json({
                success: true,
                data: libroEliminado,
            });
        } catch(err) {
            next(err)
        }
    }
    
}