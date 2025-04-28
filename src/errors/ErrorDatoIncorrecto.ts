import ApiError from "./ApiError";

export default class ErrorDatoIncorrecto extends ApiError {
    constructor(statusCode:number, errorMessage:string) {
        super(statusCode, errorMessage);
        this.name = 'ErrorDatoIncorrecto';
    }
}