import jwt from "jsonwebtoken";
import {NextFunction, Request, Response} from "express";
import {httpDebug} from "../../Lib/debug";
import {ArrayCursor} from "arangojs/lib/async/cursor";
import {arangodb} from "../../connectors";
import {aql, AqlQuery} from "arangojs/lib/cjs/aql-query";
import argon from "argon2";

const incorrectInfo = {status: "Incorrect login information"};
export default class UserLoginController {

    public static async login(req: Request, res: Response, next: NextFunction) {

        httpDebug("User Logging In");

        const email: any = req.headers.email;
        const password: any = req.headers.password;

        if (email == undefined || password == undefined) {
            res.status(401);
            res.send(incorrectInfo);
            return
        }

        const query: AqlQuery = aql`
        FOR u in users
            FILTER u.email == @email
            LIMIT 1
        RETURN u
        `;

        query.bindVars = {
            email: email
        };

        const queryResult: ArrayCursor = await arangodb.query(query);

        // This seems little off to do all(). But i have limited the query to show/retrieve the first user only
        const userAccount: any = await queryResult.all();

        if (Array.isArray(userAccount) && userAccount.length != 0) {
            // The const below this thing feels SO broken.
            const user = userAccount[0];
            if (await argon.verify(user.password, password + user.salt)) {
                res.send({status: "YEAAAAAAAAAAA WHOOOO PASSWORD CORRECT!"})
            } else {
                res.status(401);
                res.send(incorrectInfo)
            }
        } else {
            res.status(401);
            res.send(incorrectInfo);
        }
    }
}