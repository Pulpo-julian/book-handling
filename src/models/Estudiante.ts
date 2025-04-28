import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class Estudiante extends Model {}

Estudiante.init(
    {
        cedula: { type: DataTypes.STRING, allowNull: false, primaryKey: true },
        nombre: { type: DataTypes.STRING, allowNull: false },
        carrera: { type: DataTypes.STRING, allowNull: false}
    },
    {
        sequelize
    }
);

export default Estudiante;