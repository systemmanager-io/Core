import * as graphql from 'graphql'
import {ServerLog, ServerLogPaginator} from './serverLogSchema'
import serverLogModel from '../../../ArangoDB/Models/DocumentModels/Logs/serverLogModel';

export default {
    type: new graphql.GraphQLObjectType({
        name: 'ServerLogQueries',
        fields: () => ({
            list: {
                type: new graphql.GraphQLList(ServerLog),
                description: "Get a list of current serverLog entries in SystemManager",
                args: {
                    paginator: {
                        type: ServerLogPaginator,
                        description: "Create an new ServerLog entry in SystemManager"
                    },
                },
                resolve(root, args) {
                    return serverLogModel.list(args.paginator);
                }
            },
            get: {
                type: ServerLog,
                description: 'Retrieve the serverLog information by its ID or Key',
                args: {
                    selector: {
                        type: new graphql.GraphQLNonNull(graphql.GraphQLID),
                        description: 'Get an ServerLog entry by its _id or _key',
                    },
                },
                resolve(root, args) {
                    return serverLogModel.find(args.selector);
                },
            },
        }),
    }),
    resolve: () => ({}),
}
