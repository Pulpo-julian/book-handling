import ApiError from "./ApiError";

export default class ErrorDatoNoPositivo extends ApiError {
    constructor(statusCode:number, errorMessage:string) {
        super(statusCode, errorMessage);
        this.name = 'ErrorDatoNoPositivo';
    }
}