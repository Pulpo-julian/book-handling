import { Request, Response, NextFunction } from "express";
import ApiError from "../../errors/ApiError";

export function manejoError(err:ApiError, req:Request, res:Response, next:NextFunction) {
    console.error(err);

    if(err instanceof ApiError) {
        res.status(err.statusCode).json({
            success: false,
            message: err.message
        })
    } else {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }

}