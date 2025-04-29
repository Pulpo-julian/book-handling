import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import Libro from './Libro';

class Autor extends Model {}

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
        tableName: 'tbl_autor',
        timestamps: false
    }
);

// relacion uno a muchos
Autor.hasMany(Libro, {
    //la relacion se hace con el autor de tbl_libro
    foreignKey: 'autor',
    //con la pk id de la tbl_autor
    sourceKey: 'id'
})

// uno a uno
Libro.belongsTo(Autor, {
    //relacion con el autor de tbl_libro
    foreignKey: 'autor',
    //con pk de tbl_autor
    targetKey: 'id'
})

export default Autor;