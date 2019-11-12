import * as graphql from 'graphql'
import {ServerStatus, ServerStatusCreateInput, ServerStatusPaginator} from './serverStatusSchema'
import serverModel from '../../../ArangoDB/Models/DocumentModels/serverModel';

export default {
    type: new graphql.GraphQLObjectType({
        name: 'ServerStatusStatusQueries',
        fields: () => ({
            list: {
                type: new graphql.GraphQLList(ServerStatus),
                description: "Get a list of current server entries in SystemManager",
                args: {
                    paginator: {
                        type: ServerStatusPaginator,
                        description: "Create an new ServerStatus entry in SystemManager"
                    },
                },
                resolve(root, args) {
                    return serverModel.list(args.paginator);
                }
            },
            get: {
                type: ServerStatus,
                description: 'Retrieve the server information by its ID or Key',
                args: {
                    selector: {
                        type: new graphql.GraphQLNonNull(graphql.GraphQLID),
                        description: 'Get an ServerStatus entry by its _id or _key',
                    },
                },
                resolve(root, args) {
                    return serverModel.find(args.selector);
                },
            },
        }),
    }),
    resolve: () => ({}),
}
