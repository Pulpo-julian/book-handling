import { Model, DataTypes } from "sequelize";
import Estudiante from "./Estudiante";
import Libro from "./Libro";
import sequelize from "../config/database";

class Prestamo extends Model {}

Prestamo.init(
    {
        cedulaEstudiante: { type: DataTypes.STRING, primaryKey: true, allowNull: false, autoIncrement: false,
            references: { model: 'tbl_estudiante', key: 'id' }
        },
        idLibro: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: false,
            references: { model: 'tbl_libro', key: 'id' }
         },
        fechaInicio: { type: DataTypes.DATEONLY, allowNull: false },
        fechaHasta: { type: DataTypes.DATEONLY, allowNull: false },
        estado: { type: DataTypes.ENUM, values: ['activo', 'inactivo'], allowNull: false }
    },
    {
        sequelize,
        tableName: 'tbl_prestamo',
        timestamps: false
    }
);

Libro.belongsToMany(Estudiante, { through: Prestamo })
Estudiante.belongsToMany(Libro, { through: Prestamo })
export default Prestamo;