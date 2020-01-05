import {GraphQLObjectType, GraphQLBoolean, GraphQLList, GraphQLNonNull, GraphQLID} from 'graphql'
import {UserLogUpdateInput, UserLogCreateInput, UserLog} from './userLogSchema'
import userLogModel from "../../../ArangoDB/Models/DocumentModels/Logs/userLogModel";

export default {
    type: new GraphQLObjectType({
        name: 'UserLogMutation',
        fields: () => ({
            create: {
                type: UserLog,
                args: {
                    data: {
                        type: new GraphQLNonNull(UserLogCreateInput),
                        description: "Create an new UserLog entry in SystemManager"
                    },
                },
                resolve(root, args) {
                    return userLogModel.insert(args.data);
                },
            },
            update: {
                type: UserLog,
                args: {
                    selector: {
                        type: new GraphQLNonNull(GraphQLID),
                        description: "Update an UserLog entry in Systemmanager",
                    },
                    data: {
                        type: new GraphQLNonNull(UserLogUpdateInput),
                    },
                },
                resolve(root, args) {
                    return userLogModel.update(args.selector, args.data);
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
                        description: "Delete UserLog entries in systemmanager.",
                    },
                },
                async resolve(root, args) {
                    const selectors = args.selectors;

                    selectors.map(async (data:any) => {
                        await userLogModel.remove(data);
                    });
                    return true
                }
            },
        }),
    }),
    resolve: () => ({}),
}