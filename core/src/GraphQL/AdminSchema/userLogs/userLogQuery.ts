import * as graphql from 'graphql'
import {UserLog, UserLogPaginator} from './userLogSchema'
import userLogModel from '../../../ArangoDB/Models/DocumentModels/Logs/userLogModel';

export default {
    type: new graphql.GraphQLObjectType({
        name: 'UserLogQueries',
        fields: () => ({
            list: {
                type: new graphql.GraphQLList(UserLog),
                description: "Get a list of current userLog entries in SystemManager",
                args: {
                    paginator: {
                        type: UserLogPaginator,
                        description: "Create an new UserLog entry in SystemManager"
                    },
                },
                resolve(root, args) {
                    return userLogModel.list(args.paginator);
                }
            },
            get: {
                type: UserLog,
                description: 'Retrieve the userLog information by its ID or Key',
                args: {
                    selector: {
                        type: new graphql.GraphQLNonNull(graphql.GraphQLID),
                        description: 'Get an UserLog entry by its _id or _key',
                    },
                },
                resolve(root, args) {
                    return userLogModel.find(args.selector);
                },
            },
        }),
    }),
    resolve: () => ({}),
}
