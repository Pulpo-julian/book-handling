import { where } from "sequelize";
import Libro from "../models/Libro";
import { Book } from "../types/Book";

export class LibroRepository {
    static async libros() {
        return await Libro.findAll();
    }

    static async libroPorId(id:number) {
        return await Libro.findByPk(id);
    }

    static async libroPorNombre(nombre:string) {
        return await Libro.findOne({ where: { nombre }})
    }

    static async crearLibro(libro:Book) {
        return await Libro.create({ nombre: libro.nombre, autor: libro.autor, copiasDisponibles: libro.copiasDisponibles })
    }

    static async actualizarLibro(libro:Partial<Book>) {
        let id = libro.id;
        return await Libro.update(libro,  { where: {id} })
    }

    static async eliminarLibro(id:number) {
        return await Libro.destroy({ where: {id} })
    }
}