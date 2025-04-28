import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import Libro from './Libro';

class Autor extends Model {
    public id!:number;
    public nombre!:string;
    public profesion!:string;
}

Autor.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        profesion: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'autor',
        tableName: 'tbl_autor',
        timestamps: false
    }
);



export default Autor;