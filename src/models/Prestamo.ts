import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";

class Prestamo extends Model {
    public cedulaEstudiante!:string;
    public idLibro!:number;
    public fechaInicio!:Date;
    public fechaHasta!:Date;
    public estado!:string;
}

Prestamo.init(
    {
        cedulaEstudiante: { type: DataTypes.STRING, primaryKey: true, allowNull: false, autoIncrement: false},
        idLibro: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: false },
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

export default Prestamo;