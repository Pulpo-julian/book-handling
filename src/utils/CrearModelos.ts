import { Request } from "express";
import { Book } from "../types/Book";
import { Borrow } from "../types/Borrow";

export class CrearModelos {

    public static crearLibro(req:Request):Book {
        const libro:Book = {
            id: req.body.id,
            nombre: req.body.nombre,
            autor: req.body.autor,
            copiasDisponibles: req.body.copiasDisponibles
        }
        return libro;
    }

    public static crearPrestamo(req:Request):Borrow {
        const prestamo:Borrow = {
            cedulaEstudiante: req.body.cedulaEstudiante,
            idLibro: req.body.idLibro,
            fechaInicio: req.body.fechaInicio,
            fechaHasta: req.body.fechaHasta,
            estado: req.body.estado
        }

        return prestamo;
    }
}