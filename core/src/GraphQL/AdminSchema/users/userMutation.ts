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

                    console.log(args.data);
                    // @TODO make type for this.
                    let user: any = {
                        username: args.data.username,
                        email: args.data.email,
                    }

                    console.log(1);

                    // if (!args.data.name == null) {
                    //     console.log('11');
                    //     user.append({name: args.data.name});
                    //     console.log('12');
                    // } else {
                    //     console.log('13');
                    //     try {
                    //         user.append({name: args.data.username});
                    //     } catch (e) {
                    //         throw new Error(e);
                    //     }
                    //     console.log('14');
                    // }

                    console.log(2);

                    if (args.data.password === args.data.password_confirmation) {
                        dbDebug("Passwords Match!");
                        // user.append({password: args.data.password});
                    }

                    console.log(3);

                    return userModel.insert(args.data);
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