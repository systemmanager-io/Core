import {NextFunction, Request, Response} from "express";
import uuid = require("uuid/v4");

export default function jwtMiddleware(req: Request, res: Response, next: NextFunction) {

    console.log("Middleware", uuid());
    next()

}