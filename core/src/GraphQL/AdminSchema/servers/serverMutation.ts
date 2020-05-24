import {GraphQLObjectType, GraphQLBoolean, GraphQLList, GraphQLNonNull, GraphQLID} from 'graphql'
import {ServerUpdateInput, ServerCreateInput, Server} from './serverSchema'
import serverModel from "../../../ArangoDB/Models/DocumentModels/serverModel";
import uuid from "uuid/v4";

export default {
    type: new GraphQLObjectType({
        name: 'ServerMutations',
        fields: () => ({
            create: {
                type: Server,
                args: {
                    data: {
                        type: new GraphQLNonNull(ServerCreateInput),
                        description: "Create an new Server entry in SystemManager"
                    },
                },
                resolve(root, args, context) {
                    console.log(context);
                    args.data._key = uuid();
                    return serverModel.insert(args.data);
                },
            },
            update: {
                type: Server,
                args: {
                    selector: {
                        type: new GraphQLNonNull(GraphQLID),
                        description: "Update an Server entry in Systemmanager",
                    },
                    data: {
                        type: new GraphQLNonNull(ServerUpdateInput),
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
                        description: "Delete Server entries in systemmanager.",
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