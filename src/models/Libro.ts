import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import Autor from './Autor';

class Libro extends Model {}

Libro.init(
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
        nombre: { type: DataTypes.STRING, allowNull: false },
        autor: { type: DataTypes.INTEGER, allowNull: false },
        copiasDisponibles: { type: DataTypes.INTEGER, allowNull: false }
    },
    {
        sequelize,
        tableName: 'tbl_libro',
        timestamps: false
    }
);

export default Libro;