import {NextFunction, Request, Response} from "express";
import uuid = require("uuid/v4");
import UserLoginController from "../Controllers/UserLoginController";
import {httpMiddlewareDebug} from "../../Lib/debug";
import * as jwt from "jsonwebtoken";
import * as config from "../../config"
import {JsonWebTokenError} from "jsonwebtoken";
import {aql, AqlQuery} from "arangojs/lib/cjs/aql-query";
import {ArrayCursor} from "arangojs/lib/async/cursor";
import {arangodb} from "../../connectors";

// Move this to a separate error file.

const invalidToken = {
    error: "No JWT",
    message: "Perhaps you forgot to log in?"
};

const expiredToken = {
    error: "Token Expired",
    message: "The token you send is invalid, get a new token and try again"
}

const malformedToken = {
    error: "Token Expired",
    message: "The token you send is invalid, get a new token and try again"
}
export default async function jwtMiddleware(req: Request, res: Response, next: NextFunction) {

    const jwtToken: string | string[] | any = req.headers.token;

    const cookies: any = req.cookies

    console.log(cookies);

    // @TODO There must be a safer way to check if someone is real. We also need to keep the possibility of jwt Hijacking in mind
    // The last one might be paranoia at its best.

    if (jwtToken == undefined) {
        res.status(403);
        res.send(invalidToken);
        return
    }

    let jwtData: string | object| any;
    try {
        //@TODO Make it compatible with Pub/Priv keys?
        jwtData = await jwt.verify(jwtToken, config.jwt.secret)
    } catch (e) {
        if (e instanceof JsonWebTokenError) {
            console.log("JWT", e.name);
            if (e.name == "TokenExpiredError") {
                res.status(403);
                res.send(expiredToken)
            } else if (e.name == "JsonWebTokenError") {
                res.status(403);
                res.send(malformedToken);
            }
            return
        }
    }
    if (jwtData == undefined) return;
    const query: AqlQuery = aql`
        FOR u in users
            FILTER u._id == @userId
            LIMIT 1
        RETURN u.blocked
    `;
    query.bindVars = {userId: jwtData.userId};
    const queryResult: ArrayCursor = await arangodb.query(query);
    const userAccount: any = await queryResult.all();

    //If this is false the user has been blocked by an SysOp
    if (userAccount[0]) {
        res.status(403);
        res.send({error: "You no longer have access to this resource"});
        return
    }
    next();
}