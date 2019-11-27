import {UserCreateTypeSec} from "../Lib/Types/GraphQL/UserType";
import uuid from "uuid/v4";
import errorName from "../Lib/Errors/GraphQL/Errors";
import * as crypto from "crypto";
import argon from "argon2";
import {aql, AqlQuery} from "arangojs/lib/cjs/aql-query";
import {ArrayCursor} from "arangojs/lib/async/cursor";
import {arangodb} from "../connectors";
import userModel from "../ArangoDB/Models/DocumentModels/userModel";

export default async function (userData: UserCreateTypeSec) {

    let user: UserCreateTypeSec = {
        _key: uuid(),
        name: undefined,
        username: userData.username,
        email: userData.email.toLowerCase(),
        authMethod: userData.authMethod,
        password: undefined,
        password_confirmation: undefined,
        salt: undefined,
        blocked: userData.blocked || false
    };

    user.name = userData.name === undefined ? userData.username : userData.name;

    const userExists: boolean = await checkIfUserExists(user.email);
    if (userExists) throw new Error(errorName.USERALREADYEXISTS);

    if (userData.authMethod === "password") {
        if (userData.password === userData.password_confirmation) {
            const salt = crypto.randomBytes(256).toString('hex');
            user.salt = salt;
            user.password = await argon.hash(userData.password + salt);
        } else {
            throw new Error(errorName.NOPASSWORDMATCH);
        }

    }

    return userModel.insert(user).then(user => {
        delete user.password;
        return user
    });

};

async function checkIfUserExists(email: string) {

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
    const userAccount: any = await queryResult.all();
    return Array.isArray(userAccount) && userAccount.length != 0;

};