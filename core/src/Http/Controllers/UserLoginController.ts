import jwt from "jsonwebtoken";
import {NextFunction, Request, Response} from "express";
import {httpDebug} from "../../Lib/debug";

// export default function UserLoginController() {
//
// let token = jwt.sign({ foo: 'bar' }, 'shhhhh');
//
// console.log(token);
//
// return;
// }

export default class UserLoginController {

    public static login(req: Request, res: Response, next: NextFunction) {

        httpDebug("User Logging In");

        console.log(req.headers);

        const email: any = req.headers.email;
        const password: any = req.headers.password;

        if (email == undefined || password == undefined) {
            res.send({error: "Email/Password not set"});
            return
        }

        console.log(email, password)


        res.send({test: "test"});

    }

}