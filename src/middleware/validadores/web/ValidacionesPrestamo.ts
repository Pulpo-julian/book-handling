import { Request, Response, NextFunction } from "express";
import ValidadorErrores from "../../../utils/ValidadorErrores";
import { HttpStatusCode, HttpBorrowMessages, HttpBookMessages } from "../../../enums/HttpStatus";
import { FormatearFechas } from "../../../utils/FormatearFechas";

export function validacionesCrearPrestamo(req:Request, res:Response, next:NextFunction) {

    try {
        
        //validaciones cedula
        let cedulaEstudiante = req.body.cedulaEstudiante;
        let statusCodeCedulaRequerida = HttpStatusCode.DATO_REQUERIDO;
        let mensajeCedulaRequerida = HttpBorrowMessages.DATO_REQUERIDO_CEDULA;
        ValidadorErrores.validarDatoRequerido(cedulaEstudiante, statusCodeCedulaRequerida, mensajeCedulaRequerida);
        
        let statusCodeCedula = HttpStatusCode.DATO_INVALIDO;
        let mensajeTipoCedula = HttpBorrowMessages.DATO_INCORRECTO_CEDULA;
        ValidadorErrores.validarDatoString(cedulaEstudiante, statusCodeCedula, mensajeTipoCedula);

        mensajeTipoCedula = HttpBorrowMessages.DATO_INCORRECTO_CEDULA_NUMERO;
        ValidadorErrores.validarDatoNoNumerico(cedulaEstudiante, statusCodeCedula, mensajeTipoCedula);

        //validaciones libro id
        let idLibro = req.body.idLibro;
        let requiredBookIdCode = HttpStatusCode.DATO_REQUERIDO;
        let requiredBookIdMessage = HttpBookMessages.DATO_REQUERIDO_ID_LIBRO;
        ValidadorErrores.validarDatoRequerido(idLibro, requiredBookIdCode, requiredBookIdMessage);

        let isNumberBookIdCode = HttpStatusCode.DATO_INVALIDO;
        let isNumberBookIdMessage = HttpBookMessages.DATO_INVALIDO_ID_LIBRO;
        ValidadorErrores.validarDatoNumerico(idLibro, isNumberBookIdCode, isNumberBookIdMessage);

        //validaciones de fecha
        //igual o mayor a la fecha de hoy
        let clientDate = req.body.fechaInicio;
        let todayDate = FormatearFechas.formatear(new Date());
        let incorrectDateMessage = HttpBorrowMessages.DATO_INVALIDO_FECHA_MAYOR;
        let incorrectDateCode = HttpStatusCode.DATO_INVALIDO;
        ValidadorErrores.verifyGratherDate(clientDate, todayDate, incorrectDateCode, incorrectDateMessage)
        

        next();

    } catch(err) {
        next(err);
    }
}
