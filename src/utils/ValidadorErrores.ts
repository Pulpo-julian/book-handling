import ErrorDatoDuplicado from "../errors/ErrorDatoDuplicado";
import ErrorDatoRequerido from "../errors/ErrorDatoRequerido";
import ErrorDatoNoPositivo from "../errors/ErrorDatoNoPositivo";
import ErrorDatoIncorrecto from "../errors/ErrorDatoIncorrecto";

export default class ValidadorErrores {

    public static validarDatoRequerido(dato:any, statusCode:number, errorMessage:string) {
        if( dato === null || dato === undefined || ( typeof dato === "string" && dato.trim() === "" )) {
            throw new ErrorDatoRequerido(statusCode, errorMessage);
        }
    }

    private static validarNumerico(dato:any, statusCode:number, errorMessage:string, inverso:boolean = false) {

        let esNumero = typeof dato !== 'number';

        if(inverso) {
            esNumero = !esNumero
        }

        if(esNumero) {
            //se lanzara cuando se necesite que sea numero
            throw new ErrorDatoIncorrecto(statusCode, errorMessage);
        } else {
            //se lanzara cuando se necesite que no sea numero
            throw new ErrorDatoIncorrecto(statusCode, errorMessage);
        }

    }

    public static validarDatoNoNumerico(dato:any, statusCode:number, errorMessage:string) {
        this.validarNumerico(dato, statusCode, errorMessage, true);
    }
    
    public static validarDatoNumerico(dato:any, statusCode:number, errorMessage:string) {
        this.validarNumerico(dato, statusCode, errorMessage);
    }

    

    public static validarDatoDuplicado(dato:Object, datoComparado:Object, statusCode:number, errorMessage:string) {
        const valorDato = Object.values(dato)[0];
        const valorComparado = Object.values(datoComparado)[0];
        if(valorDato === valorComparado) {
            throw new ErrorDatoDuplicado(statusCode, errorMessage);
        }
    }

    public static validarDatoPositivo(dato:number, statusCode:number, errorMessage:string) {
        if(dato <= 0) {
            throw new ErrorDatoNoPositivo(statusCode, errorMessage);
        }
    }

    public static validarDatoString(dato:any, statusCode:number, errorMessage:string) {
        if(!(typeof dato === "string")) {
            throw new ErrorDatoIncorrecto(statusCode, errorMessage);
        }
    }
    
}