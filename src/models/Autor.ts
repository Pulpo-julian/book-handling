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
        tableName: 'tbl_autor',
        timestamps: false
    }
);

// relacion uno a muchos
Autor.hasMany(Libro, {
    //nombre de fk del autor en el libro
    foreignKey: 'autor',
    //campo de la clave primaria del autor
    sourceKey: 'id'
})

Libro.belongsTo(Autor, {
    foreignKey: 'autor',
    targetKey: 'id'
})

export default Autor;