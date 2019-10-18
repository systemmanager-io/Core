import * as graphql from 'graphql'
import {Server, ServerCreateInput, ServerPaginator} from './serverSchema'
import serverModel from '../../../ArangoDB/Models/serverModel';

export default {
    type: new graphql.GraphQLObjectType({
        name: 'ServerQueries',
        fields: () => ({
            list: {
                type: new graphql.GraphQLList(Server),
                description: "Get a list of current server entries in SystemManager",
                args: {
                    paginator: {
                        type: ServerPaginator,
                        description: "Filter your results"
                    },
                },
                resolve(root, args) {
                    return serverModel.list(args.paginator);
                }
            },
            get: {
                type: Server,
                description: 'Retrieve the server information by its ID or Key',
                args: {
                    selector: {
                        type: new graphql.GraphQLNonNull(graphql.GraphQLID),
                        description: 'Get an Server entry by its _id or _key',
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
