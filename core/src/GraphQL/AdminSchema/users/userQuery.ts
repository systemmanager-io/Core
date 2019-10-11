import * as graphql from 'graphql'
import {User, UserPaginator} from './userSchema'
import userModel from '../../../ArangoDB/Models/settingModel';

export default {
    type: new graphql.GraphQLObjectType({
        name: 'UserQueries',
        fields: () => ({
            list: {
                type: new graphql.GraphQLList(User),
                description: "Get a list of current setting entries in SystemManager",
                args: {
                    paginator: {
                        type: UserPaginator,
                        description: "Create an new Setting entry in SystemManager"
                    },
                },
                resolve(root, args) {
                    return userModel.list(args.paginator);
                }
            },
            get: {
                type: User,
                description: 'Retrieve the setting information by its ID or Key',
                args: {
                    selector: {
                        type: new graphql.GraphQLNonNull(graphql.GraphQLID),
                        description: 'Get an Setting entry by its _id or _key',
                    },
                },
                resolve(root, args) {
                    return userModel.find(args.selector);
                },
            },
        }),
    }),
    resolve: () => ({}),
}