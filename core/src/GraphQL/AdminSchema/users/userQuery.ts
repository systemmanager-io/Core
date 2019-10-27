import * as graphql from 'graphql'
import {User, UserPaginator} from './userSchema'
import userModel from '../../../ArangoDB/Models/DocumentModels/userModel';

export default {
    type: new graphql.GraphQLObjectType({
        name: 'UserQueries',
        fields: () => ({
            list: {
                type: new graphql.GraphQLList(User),
                description: "Get a list of current user entries in SystemManager",
                args: {
                    paginator: {
                        type: UserPaginator,
                        description: "Filter your results"
                    },
                },
                resolve(root, args) {
                    const c = userModel.list(args.paginator);
                    console.log(c.then((result) => {return result}));
                    return c;
                }
            },
            get: {
                type: User,
                description: 'Retrieve an users information by its ID or Key',
                args: {
                    selector: {
                        type: new graphql.GraphQLNonNull(graphql.GraphQLID),
                        description: 'Get an User entry by its _id or _key',
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
