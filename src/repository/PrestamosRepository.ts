import Prestamo from "../models/Prestamo";
import { Borrow } from "../types/Borrow";

export class PrestamoRepository {
    static async crearPrestamo(prestamo:Borrow) {
        return await Prestamo.create({ 
            cedulaEstudiante: prestamo.cedulaEstudiante,
            idLibro: prestamo.idLibro,
            fechaInicio: prestamo.fechaInicio,
            fechaHasta: prestamo.fechaHasta,
            estado: prestamo.estado
        })
    }
}