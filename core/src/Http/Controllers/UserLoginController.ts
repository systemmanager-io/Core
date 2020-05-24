import * as jsonwebtoken from "jsonwebtoken";
import {NextFunction, Request, Response} from "express";
import {httpDebug} from "../../Lib/debug";
import {ArrayCursor} from "arangojs/lib/async/cursor";
import {arangodb} from "../../connectors";
import {aql, AqlQuery} from "arangojs/lib/cjs/aql-query";
import argon from "argon2";
import * as config from "../../config"

const incorrectInfo = {status: "Incorrect login information"};
export default class UserLoginController {

    public static async login(req: Request, res: Response, next: NextFunction) {


        let email: string | string[] | undefined = req.body.email;
        const password: string | string[] | undefined = req.body.password;

        if (email == undefined || password == undefined) {
            res.status(401);
            res.send(incorrectInfo);
            return
        }
        if (typeof email === "string") email = email.toLowerCase();

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

        // This seems little off to do all(). But I have limited the query to show/retrieve the first user only
        const userAccount: any = await queryResult.all();

        if (Array.isArray(userAccount) && userAccount.length == 0) res.status(401).send(incorrectInfo);
        // The const below this thing feels SO broken.
        const user = userAccount[0];
        if (await argon.verify(user.password, password + user.salt)) {

            if (user.blocked) {
                res.status(403);
                res.send({error: "You no longer have access to this resource"});
                return
            }

            const jwt = jsonwebtoken.sign({
                userId: user._id
            }, config.jwt.secret, {expiresIn: "1h"});


            res.send({token: jwt})

        } else {
            res.status(401);
            res.send(incorrectInfo)
        }
    }
}