import ApiError from "./ApiError";

export default class ErrorDatoNoExiste extends ApiError {
    constructor(statusCode:number, errorMessage:string) {
        super(statusCode, errorMessage);
        this.name = 'ErrorDatoNoExiste';
    }
}