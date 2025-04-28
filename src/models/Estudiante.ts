import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class Estudiante extends Model {
    public cedula!:string;
    public nombre!:string;
    public carrera!:string;
}

Estudiante.init(
    {
        cedula: { type: DataTypes.STRING },
        nombre: { type: DataTypes.STRING },
        carrera: { type: DataTypes.STRING}
    },
    {
        sequelize
    }
);

export default Estudiante;