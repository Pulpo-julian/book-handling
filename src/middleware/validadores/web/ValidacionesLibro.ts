import { Request, Response, NextFunction } from "express";
import ValidadorErrores from "../../utils/ValidadorErrores";
import { HttpStatusCode, HttpBookMessages } from "../../enums/HttpStatus"; 

export function validacionCrearLibro(req:Request, res:Response, next:NextFunction) {

    try {

        let nombreLibro = req.body.nombre;
        let statusCodeNombreLibro = HttpStatusCode.DATO_REQUERIDO;
        let mensajeNombreLibro = HttpBookMessages.DATO_REQUERIDO_NOMBRE_LIBRO
        ValidadorErrores.validarDatoRequerido(nombreLibro, statusCodeNombreLibro, mensajeNombreLibro);

        let autorLibro = req.body.autor;
        let statusCodeAutorLibro = HttpStatusCode.DATO_REQUERIDO;
        let mensajeAutorLibro = HttpBookMessages.DATO_REQUERIDO_AUTOR_LIBRO;
        ValidadorErrores.validarDatoRequerido(autorLibro, statusCodeAutorLibro, mensajeAutorLibro);

        let statusCodeDatoNumerico = HttpStatusCode.DATO_INVALIDO;
        let mensajeAutorNumerico = HttpBookMessages.DATO_INVALIDO_AUTOR_NUMERO;
        ValidadorErrores.validarDatoNumerico(autorLibro, statusCodeDatoNumerico, mensajeAutorNumerico)
        
        let copias = req.body.copiasDisponibles;
        let statusCodeCopiasLibro = HttpStatusCode.DATO_REQUERIDO;
        let mensajeCopiasLibro = HttpBookMessages.DATO_REQUERIDO_COPIAS_LIBRO;
        let statusCodeCopiaNoNumero = HttpStatusCode.DATO_INVALIDO;
        let mensajeCopiaNumerico = HttpBookMessages.DATO_INVALIDO_CANTIDAD_NUMERO;
        ValidadorErrores.validarDatoRequerido(copias, statusCodeCopiasLibro, mensajeCopiasLibro);
        ValidadorErrores.validarDatoNumerico(copias, statusCodeCopiaNoNumero, mensajeCopiaNumerico)

        let statusCodeCantCopias = HttpStatusCode.DATO_INVALIDO;
        let mensajeCantCopias = HttpBookMessages.DATO_INVALIDO_CANTIDAD_DISPONIBLE;
        ValidadorErrores.validarDatoPositivo(copias, statusCodeCantCopias, mensajeCantCopias);

        next();

    } catch(err) {
        next(err);
    }
    
}

export function validacionIdLibro(req:Request, res:Response, next:NextFunction) {

    try {

        let idLibro = req.body.id;
        let statusCodeIdLibro = HttpStatusCode.DATO_REQUERIDO;
        let mensajeIdLibro = HttpBookMessages.DATO_REQUERIDO_ID_LIBRO;
        ValidadorErrores.validarDatoRequerido(idLibro, statusCodeIdLibro, mensajeIdLibro);

        let statusCodeDatoNumerico = HttpStatusCode.DATO_INVALIDO;
        let mensajeIdNumerico = HttpBookMessages.DATO_INVALIDO_ID_LIBRO;
        ValidadorErrores.validarDatoNumerico(idLibro, statusCodeDatoNumerico, mensajeIdNumerico)
        
        next();

    } catch(err) {
        next(err);
    }
    
}