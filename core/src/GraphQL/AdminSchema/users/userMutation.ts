import {GraphQLObjectType, GraphQLBoolean, GraphQLList, GraphQLNonNull, GraphQLID} from 'graphql'
import {UserUpdateInput, UserCreateInput, User, UserInput} from './userSchema'
import userModel from "../../../ArangoDB/Models/userModel";
import {dbDebug} from "../../../Lib/debug";
import userType from "../../../Lib/Types/GraphQL/UserType";

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
                resolve(root, args) {

                    // @TODO make type for this.
                    let user: any = {
                        username: args.data.username,
                        email: args.data.email,
                    }

                    if (!args.date.name === undefined) {
                        user.append({name: args.data.name})
                    } else {
                        user.append({name: args.data.username})
                    }


                    if (args.data.password === args.data.password_confirmation) {
                        dbDebug("Passwords Match!");0
                        user.append({password: args.data.password});
                    }

                    return userModel.insert(user);
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

                    selectors.map(async (data:any) => {
                        await userModel.remove(data);
                    });
                    return true
                }
            },
        }),
    }),
    resolve: () => ({}),
}