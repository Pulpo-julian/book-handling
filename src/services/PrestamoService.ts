import { PrestamoRepository } from "../repository/PrestamosRepository";
import { Borrow } from "../types/Borrow";

export class PrestamoService {

    static async crearPrestamo(prestamo:Borrow) {
        return await PrestamoRepository.crearPrestamo(prestamo);
    }

}