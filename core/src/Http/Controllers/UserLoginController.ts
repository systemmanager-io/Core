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

        res.send({test: "test"});

    }

}