import Estudiante from "../models/Estudiante";

export class EstudianteRepository {
    static async estudiantePorId(cedula:string) {
        return await Estudiante.findByPk(cedula);
    }
}