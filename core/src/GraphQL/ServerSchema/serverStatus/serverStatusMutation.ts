import {GraphQLObjectType, GraphQLBoolean, GraphQLList, GraphQLNonNull, GraphQLID} from 'graphql'
import {ServerStatusUpdateInput, ServerStatusCreateInput, ServerStatus} from './serverStatusSchema'
import serverModel from "../../../ArangoDB/Models/DocumentModels/serverModel";

export default {
    type: new GraphQLObjectType({
        name: 'ServerStatusMutations',
        fields: () => ({
            create: {
                type: ServerStatus,
                args: {
                    data: {
                        type: new GraphQLNonNull(ServerStatusCreateInput),
                        description: "Create an new ServerStatus entry in SystemManager"
                    },
                },
                resolve(root, args) {
                    return serverModel.insert(args.data);
                },
            },
            update: {
                type: ServerStatus,
                args: {
                    selector: {
                        type: new GraphQLNonNull(GraphQLID),
                        description: "Update an ServerStatus entry in Systemmanager",
                    },
                    data: {
                        type: new GraphQLNonNull(ServerStatusUpdateInput),
                    },
                },
                resolve(root, args) {
                    return serverModel.update(args.selector, args.data);
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
                        description: "Delete ServerStatus entries in systemmanager.",
                    },
                },
                async resolve(root, args) {
                    const selectors = args.selectors;

                    selectors.map(async (data:any) => {
                        await serverModel.remove(data);
                    });
                    return true
                }
            },
        }),
    }),
    resolve: () => ({}),
}