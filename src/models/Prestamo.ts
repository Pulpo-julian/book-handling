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
        cedulaEstudiante: { type: DataTypes.STRING},
        idLibro: { type: DataTypes.INTEGER },
        fechaInicio: { type: DataTypes.DATEONLY },
        fechaHasta: { type: DataTypes.DATEONLY },
        estado: { type: DataTypes.ENUM, values: ['activo', 'inactivo'] }
    },
    {
        sequelize,
        modelName: 'prestamo',
        tableName: 'tbl_prestamo',
        timestamps: false
    }
);

export default Prestamo;