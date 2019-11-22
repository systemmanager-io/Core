import {NextFunction, Request, Response} from "express";
import uuid = require("uuid/v4");
import UserLoginController from "../Controllers/UserLoginController";
import {httpMiddlewareDebug} from "../../Lib/debug";
import * as jwt from "jsonwebtoken";
import * as config from "../../config"
import {JsonWebTokenError} from "jsonwebtoken";

const invalidToken = {
    error: "No JWT",
    message: "Perhaps you forgot to log in?"
};
export default function jwtMiddleware(req: Request, res: Response, next: NextFunction) {

    httpMiddlewareDebug("JWT Middleware", uuid());
    const jwtToken: any = req.headers.token;

    // @TODO Make a check to see if someone is blocked before continuing
    // @TODO There must be a safer way to check if someone is real. We also need to keep the possibility of jwt Hijacking in mind

    if (jwtToken == undefined) {
        res.status(403);
        res.send(invalidToken);
        return
    }

    try {
        //@TODO Change this to RSA KEYS?
        jwt.verify(jwtToken, config.jwt.secret)
    } catch (e) {
        if (e instanceof JsonWebTokenError) {
            console.log("JWT", e.name);
            if(e.name == "TokenExpiredError") {
                res.status(403);
                res.send({error: "Token Expired"})
            } else if(e.name == "JsonWebTokenError") {
                res.status(403);
                res.send({error: "Token Malformed"});
            }
            return
        }
    }
    next();

}