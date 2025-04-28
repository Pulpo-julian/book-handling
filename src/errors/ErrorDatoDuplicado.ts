import ApiError from "./ApiError";

export default class ErrorDatoDuplicado extends ApiError {
    constructor(statusCode:number, errorMessage:string) {
        super(statusCode, errorMessage);
        this.name = 'ErrorDatoDuplicado';
    }
}