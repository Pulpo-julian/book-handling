import  { LibroRepository } from '../repository/LibroRepository';
import { AutorRepository } from '../repository/AutorRepository';
import { HttpStatusCode, HttpBookMessages } from '../enums/HttpStatus';
import ErrorDatoNoExiste from '../errors/ErrorDatoNoExiste';
import { Book } from '../types/Book';

export class LibroService {
    
    static async obtenerLibros() {
        return await LibroRepository.libros();
    }

    static async obtenerLibroId(id:number) {
        return await LibroRepository.libroPorId(id);
    }

    static async obtenerLibroNombre(nombre:string) {
        return await LibroRepository.libroPorNombre(nombre);
    }

    static async crearLibro(libro:Book) {
        await this.validarAutorExistente(libro.autor)
        await this.validarLibroExistePorNombre(libro.nombre);
        return await LibroRepository.crearLibro(libro);
    }

    static async actualizarLibro(libro:Book) {
        await this.validarAutorExistente(libro.autor);
        await this.validarLibroExiste(libro.id);
        await this.validarLibroExistePorNombre(libro.nombre);
        return await LibroRepository.actualizarLibro(libro);
    }

    static async eliminarLibro(id:number) {
        await this.validarLibroExiste(id);
        return await LibroRepository.eliminarLibro(id);
    }

    private static async validarAutorExistente(autorId:number) {
        const autor = await AutorRepository.autorPorId(autorId);
        if(!autor) {
            let statusCode = HttpStatusCode.DATO_NO_ENCONTRADO;
            let mensajeError = HttpBookMessages.DATO_NO_ENCONTRADO_AUTOR_LIBRO; 
            throw new ErrorDatoNoExiste(statusCode, mensajeError);
        }
    }

    static async validarLibroExiste(id:number) {
        const libro = await this.obtenerLibroId(id);
        if(!libro) {
            let statusCode = HttpStatusCode.DATO_NO_ENCONTRADO;
            let mensajeError = HttpBookMessages.DATO_INVALIDO_LIBRO_NO_EXITE;
            throw new ErrorDatoNoExiste(statusCode, mensajeError);
        }
    }

    static async validarLibroExistePorNombre(nombre:string) {
        const libro = await this.obtenerLibroNombre(nombre);
        if(libro) {
            let statusCode = HttpStatusCode.DATO_DUPLICADO;
            let mensajeError = HttpBookMessages.DATO_INVALIDO_LIBRO_DUPLICADO;
            throw new ErrorDatoNoExiste(statusCode, mensajeError);
        }

    }


}