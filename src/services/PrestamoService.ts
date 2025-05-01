import { PrestamoRepository } from "../repository/PrestamosRepository";
import { EstudianteRepository } from "../repository/EstudianteRepository";
import { Borrow } from "../types/Borrow";

export class PrestamoService {

    static async crearPrestamo(prestamo:Borrow) {
        // primero validar que la cedula exista
        return await PrestamoRepository.crearPrestamo(prestamo);
    }

    private async validarCedulaExiste(cedula:string) {
        return await EstudianteRepository.estudiantePorId(cedula);
    }

}