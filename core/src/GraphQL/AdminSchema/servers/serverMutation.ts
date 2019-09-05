import {GraphQLObjectType, GraphQLBoolean, GraphQLList, GraphQLNonNull, GraphQLID} from 'graphql'
import {ServerUpdateInput, ServerCreateInput, Server} from './serverSchema'
import serverModel from "../../../Arango/Models/serverModel";

export default {
    type: new GraphQLObjectType({
        name: 'ServerMutations',
        fields: () => ({
            create: {
                type: Server,
                args: {
                    data: {
                        type: new GraphQLNonNull(ServerCreateInput),
                    },
                },
                resolve(root, args) {
                    return serverModel.insert(args.data);
                },
            },
            update: {
                type: Server,
                args: {
                    selector: {
                        type: new GraphQLNonNull(GraphQLID),
                        description: "_id or _key of the object",
                    },
                    data: {
                        type: new GraphQLNonNull(ServerUpdateInput),
                    },
                },
                resolve(root, args) {
                    // return userModel.update(args.selector, args.data);
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
                        description: "a list of _id or _key of the object",
                    },
                },
                async resolve(root, args) {
                    //@TODO MULTIREMOVE!
                    return true
                }
            },
        }),
    }),
    resolve: () => ({}),
}