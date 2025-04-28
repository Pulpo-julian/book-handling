export enum HttpStatusCode {
    DATO_DUPLICADO = 409,      // Conflict
    DATO_REQUERIDO = 400,      // Bad Request
    DATO_INVALIDO = 422,       // Unprocessable Entity
    DATO_NO_ENCONTRADO = 404   // Not Found
}

export enum HttpStatusWords {
    DATO_DUPLICADO =  "el dato asignado ya esta en la base de datos",      
    DATO_REQUERIDO_NOMBRE_LIBRO = "el nombre del libro es obligatorio",      
    DATO_REQUERIDO_AUTOR_LIBRO = "el autor del libro es obligatorio",      
    DATO_REQUERIDO_COPIAS_LIBRO = "la cantidad de copias es obligatorio",      
    DATO_NO_ENCONTRADO_AUTOR_LIBRO = "el autor del libro no existe en la base de datos",   
    DATO_INVALIDO_CANTIDAD_DISPONIBLE = "la cantidad disponible debe ser mayor a 0",   
    DATO_INVALIDO_CANTIDAD_NUMERO = "la cantidad debe ser un numero",   
    DATO_INVALIDO_AUTOR_NUMERO = "el autor debe ser un numero que represente un id",   
    DATO_INVALIDO_AUTOR_NO_EXISTE = "el id del autor no existe en base de datos",
    DATO_REQUERIDO_ID_LIBRO = "el id del libro es obligatorio",
    DATO_INVALIDO_ID_LIBRO = "el id del libro debe ser un numero",
    DATO_INVALIDO_LIBRO_NO_EXITE = "el id del libro no existe en la base de datos",
    DATO_INVALIDO_LIBRO_DUPLICADO = "el nombre del libro ya existe"
}