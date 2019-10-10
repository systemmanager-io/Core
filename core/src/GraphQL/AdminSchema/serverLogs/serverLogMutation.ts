import {GraphQLObjectType, GraphQLBoolean, GraphQLList, GraphQLNonNull, GraphQLID} from 'graphql'
import {ServerLogUpdateInput, ServerLogCreateInput, ServerLog} from './serverLogSchema'
import serverLogModel from "../../../ArangoDB/Models/serverLogModel";

export default {
    type: new GraphQLObjectType({
        name: 'ServerLogMutations',
        fields: () => ({
            create: {
                type: ServerLog,
                args: {
                    data: {
                        type: new GraphQLNonNull(ServerLogCreateInput),
                        description: "Create an new ServerLog entry in SystemManager"
                    },
                },
                resolve(root, args) {
                    return serverLogModel.insert(args.data);
                },
            },
            update: {
                type: ServerLog,
                args: {
                    selector: {
                        type: new GraphQLNonNull(GraphQLID),
                        description: "Update an ServerLog entry in Systemmanager",
                    },
                    data: {
                        type: new GraphQLNonNull(ServerLogUpdateInput),
                    },
                },
                resolve(root, args) {
                    return serverLogModel.update(args.selector, args.data);
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
                        description: "Delete ServerLog entries in systemmanager.",
                    },
                },
                async resolve(root, args) {
                    const selectors = args.selectors;

                    selectors.map(async (data:any) => {
                        await serverLogModel.remove(data);
                    });
                    return true
                }
            },
        }),
    }),
    resolve: () => ({}),
}