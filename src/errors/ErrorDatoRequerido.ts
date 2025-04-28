import ApiError from "./ApiError";

export default class ErrorDatoRequerido extends ApiError {
    constructor(statusCode:number, errorMessage:string) {
        super(statusCode, errorMessage);
        this.name = 'ErrorDatoRequerido';
    }
}