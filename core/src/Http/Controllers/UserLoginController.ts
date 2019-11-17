import jwt from "jsonwebtoken";
import {NextFunction, Request, Response} from "express";
import {httpDebug} from "../../Lib/debug";
import {ArrayCursor} from "arangojs/lib/async/cursor";
import {arangodb} from "../../connectors";
import {aql, AqlQuery} from "arangojs/lib/cjs/aql-query";

// export default function UserLoginController() {
//
// let token = jwt.sign({ foo: 'bar' }, 'shhhhh');
//
// console.log(token);
//
// return;
// }

export default class UserLoginController {

    public static async login(req: Request, res: Response, next: NextFunction) {

        httpDebug("User Logging In");

        const email: any = req.headers.email;
        const password: any = req.headers.password;

        if (email == undefined || password == undefined) {
            res.send({error: "Email/Password not set"});
            return
        }

        const query: AqlQuery = aql`
        FOR u in users
            FILTER u.email == @email
        RETURN u
        `;

        query.bindVars = {
            email: email
        };

        const queryResult: ArrayCursor = await arangodb.query(query);
        const userAccount = await queryResult.all();

        if(!Array.isArray(userAccount) || !userAccount.length) {
            console.log("User exists")
            console.log(userAccount);
        }
        // console.log(all);
        // console.log(email, password)


        res.send({test: "test"});

    }

}