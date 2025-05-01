import { PrestamoRepository } from "../repository/PrestamosRepository";
import { EstudianteRepository } from "../repository/EstudianteRepository";
import { HttpStatusCode, HttpBorrowMessages } from "../enums/HttpStatus";
import ErrorDatoNoExiste from "../errors/ErrorDatoNoExiste";
import { Borrow } from "../types/Borrow";

export class PrestamoService {

    /** METODOS CRUD */

    static async crearPrestamo(prestamo:Borrow) {
        // primero validar que la cedula exista
        console.log("cedula que llega: " + prestamo.cedulaEstudiante)
        await this.validarCedulaExiste(prestamo.cedulaEstudiante);
        return await PrestamoRepository.crearPrestamo(prestamo);
    }



    /** METODOS VALIDADORES DE CRUD */

    private static async validarCedulaExiste(cedula:string) {
        
        const estudiante = await EstudianteRepository.estudiantePorId(cedula);

        if(!estudiante) {
            let estudianteStatusCode = HttpStatusCode.DATO_NO_ENCONTRADO;
            let estudianteMensajeError = HttpBorrowMessages.DATO_NO_ENCONTRADO_CEDULA;
            throw new ErrorDatoNoExiste(estudianteStatusCode, estudianteMensajeError);
        }
    }

}