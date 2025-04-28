import { Request, Response, NextFunction } from 'express';
import { Book } from '../types/Book';
import { LibroService } from '../services/LibroService';
import { CrearModelos } from '../utils/CrearModelos'; 

export class LibroController {

    static async crearLibro(req:Request, res:Response, next:NextFunction) {
        try {
            const libro = CrearModelos.crearLibro(req);
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
        try {
            const libro = CrearModelos.crearLibro(req);
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
        try {
            const id = req.body.id;
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