import {NextFunction, Request, Response} from "express";
import uuid = require("uuid/v4");
import UserLoginController from "../Controllers/UserLoginController";
import {httpMiddlewareDebug} from "../../Lib/debug";

export default function jwtMiddleware(req: Request, res: Response, next: NextFunction) {

    httpMiddlewareDebug("JWT Middleware", uuid());
    next()

}