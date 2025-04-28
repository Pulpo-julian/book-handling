export default abstract class ApiError extends Error {
    public statusCode:number;

    constructor(statusCode:number, errorMessage:string) {
        super(errorMessage);
        this.statusCode = statusCode;
        this.name = 'ApiError';
        
        //para capturar errores en el handler
        Object.setPrototypeOf(this, ApiError.prototype);
        Error.captureStackTrace(this, this.constructor);
    }

}