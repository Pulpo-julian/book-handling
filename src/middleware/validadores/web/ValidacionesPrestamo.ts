import { Request, Response, NextFunction } from "express";
import ValidadorErrores from "../../utils/ValidadorErrores";
import { HttpStatusCode, HttpBorrowMessages } from "../../enums/HttpStatus";

export function validacionesCrearPrestamo(req:Request, res:Response, next:NextFunction) {

    try {

        let cedulaEstudiante = req.body.cedulaEstudiante;
        let mensajeCedulaRequerida = HttpStatusCode.DATO_REQUERIDO;
        let statusCodeCedulaRequerida = HttpBorrowMessages.DATO_REQUERIDO_CEDULA;
        ValidadorErrores.validarDatoRequerido(cedulaEstudiante, mensajeCedulaRequerida, statusCodeCedulaRequerida);
        

        let statusCodeCedula = HttpStatusCode.DATO_INVALIDO;
        let mensajeTipoCedula = HttpBorrowMessages.DATO_INCORRECTO_CEDULA;
        ValidadorErrores.validarDatoString(cedulaEstudiante, statusCodeCedula, mensajeTipoCedula);

        mensajeTipoCedula = HttpBorrowMessages.DATO_INCORRECTO_CEDULA_NUMERO
        ValidadorErrores.validarDatoNoNumerico(cedulaEstudiante, statusCodeCedula, mensajeTipoCedula);


        

        next();

    } catch(err) {
        next(err);
    }
}
