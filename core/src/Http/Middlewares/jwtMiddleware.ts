import {NextFunction, Request, Response} from "express";

export default function jwtMiddleware(req: Request, res: Response, next: NextFunction) {

    next()

}