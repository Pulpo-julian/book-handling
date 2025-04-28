import { Request } from "express";
import { Book } from "../types/Book";

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
}