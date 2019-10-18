import {GraphQLObjectType, GraphQLBoolean, GraphQLList, GraphQLNonNull, GraphQLID} from 'graphql'
import {UserUpdateInput, UserCreateInput, User, UserInput} from './userSchema'
import userModel from "../../../ArangoDB/Models/userModel";
import {dbDebug} from "../../../Lib/debug";
import {UserCreateType, UserUpdateType} from "../../../Lib/Types/GraphQL/UserType";
import * as crypto from "crypto";
import argon from "argon2";
import uuid from "uuid/v4"
import errorName from "./../../../Lib/Errors/GraphQL/Errors"

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

                    // @TODO CHECK IF USER ALREADY EXISTS

                    let user: UserCreateType = {
                        _key: uuid(),
                        name: undefined,
                        username: args.data.username,
                        email: args.data.email.toLowerCase(),
                        authMethod: args.data.authMethod,
                        password: undefined,
                        salt: undefined
                    };

                    if (args.data.name !== undefined) {
                        user.name = args.data.name;
                    } else {
                        user.name = args.data.username;
                    }

                    if (args.data.authMethod === "password") {
                        if (args.data.password === args.data.password_confirmation) {
                            // By the way, as a user you wont be able to get the password nor the hash out of the graphql
                            // When you request it at account creation you will get NULL back.
                            const salt = crypto.randomBytes(256);
                            const password = await argon.hash(args.data.password + salt.toString("hex"));
                            user.salt = salt.toString('hex');
                            user.password = password;
                        } else {
                            throw new Error(errorName.NOPASSWORDMATCH);
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
                async resolve(root, args) {
                    let user: UserUpdateType = {
                        name: args.data.name || undefined,
                        username: args.data.username || undefined,
                        email: args.data.email.toLowerCase() || undefined,
                        authMethod: args.data.authMethod || undefined,
                        password: undefined,
                        salt: undefined
                    };

                    if (args.data.authMethod === "password") {
                        if (args.data.password !== undefined) {
                            if (args.data.password === args.data.password_confirmation) {
                                // By the way, as a user you wont be able to get the password nor the hash out of the graphql
                                // When you request it at account creation you will get NULL back.
                                const salt = crypto.randomBytes(256);
                                const password = await argon.hash(args.data.password + salt.toString("hex"));
                                user.salt = salt.toString('hex');
                                user.password = password;
                            } else {
                                throw new Error(errorName.NOPASSWORDMATCH);
                            }
                        }
                    }


                    return userModel.update(args.selector, user).then(user => {
                        delete user.password;
                        return user;
                    });
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