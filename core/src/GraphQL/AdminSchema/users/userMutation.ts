import {GraphQLObjectType, GraphQLBoolean, GraphQLList, GraphQLNonNull, GraphQLID} from 'graphql'
import {UserUpdateInput, UserCreateInput, User, UserInput} from './userSchema'
import userModel from "../../../ArangoDB/Models/userModel";
import {dbDebug} from "../../../Lib/debug";
import UserType from "../../../Lib/Types/GraphQL/UserType";
import * as crypto from "crypto";
import argon from "argon2";
import uuid from "uuid/v4"

export default {
    type: new GraphQLObjectType({
        name: 'UserMutations',
        fields: () => ({
            create: {
                type: UserInput,
                args: {
                    data: {
                        type: new GraphQLNonNull(UserCreateInput),
                        description: "Create an new User entry in SystemManager"
                    },
                },
                async resolve(root, args) {



                    // @TODO make type for this.
                    let user: UserType = {
                        _key: uuid(),
                        name: undefined,
                        username: args.data.username,
                        email: args.data.email,
                        authMethod: args.data.authMethod,
                        password: undefined,
                        salt: undefined
                    }

                    if (args.data.name !== undefined) {
                        user.name = args.data.name;
                    } else {
                        user.name = args.data.username;
                    }

                    if (args.data.authMethod === "password") {
                        if (args.data.password === args.data.password_confirmation) {
                            // @TODO SALTING AND HASHING!
                            // By the way, as a user you wont be able to get the password nor the hash out of the graphql
                            const salt = crypto.randomBytes(256);
                            const password = await argon.hash(args.data.password + salt.toString("hex"));
                            user.salt = salt.toString('hex');
                            user.password = password;
                        }

                    }
                    return userModel.insert(user).then(user => {
                        delete user.password;
                        return user
                    });
                },
            },
            update: {
                type: UserInput,
                args: {
                    selector: {
                        type: new GraphQLNonNull(GraphQLID),
                        description: "Update an User entry in Systemmanager",
                    },
                    data: {
                        type: new GraphQLNonNull(UserUpdateInput),
                    },
                },
                resolve(root, args) {
                    return userModel.update(args.selector, args.data);
                },
            },
            remove: {
                type: GraphQLBoolean,
                args: {
                    selectors: {
                        type: new GraphQLNonNull(
                            new GraphQLList(
                                new GraphQLNonNull(GraphQLID),
                            ),
                        ),
                        description: "Delete User entries in systemmanager.",
                    },
                },
                async resolve(root, args) {
                    const selectors = args.selectors;

                    selectors.map(async (data: any) => {
                        await userModel.remove(data);
                    });
                    return true
                }
            },
        }),
    }),
    resolve: () => ({}),
}