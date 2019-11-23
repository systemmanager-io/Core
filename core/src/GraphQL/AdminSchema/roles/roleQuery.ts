import * as graphql from 'graphql'
import {Role, RolePaginator} from './roleSchema'
import roleModel from '../../../ArangoDB/Models/DocumentModels/Permissions/roleModel';

export default {
    type: new graphql.GraphQLObjectType({
        name: 'RoleQueries',
        fields: () => ({
            list: {
                type: new graphql.GraphQLList(Role),
                description: "Get a list of current serverLog entries in SystemManager",
                args: {
                    paginator: {
                        type: RolePaginator,
                        description: "Create an new Role entry in SystemManager"
                    },
                },
                resolve(root, args) {
                    return roleModel.list(args.paginator);
                }
            },
            get: {
                type: Role,
                description: 'Retrieve the serverLog information by its ID or Key',
                args: {
                    selector: {
                        type: new graphql.GraphQLNonNull(graphql.GraphQLID),
                        description: 'Get an Role entry by its _id or _key',
                    },
                },
                resolve(root, args) {
                    return roleModel.find(args.selector);
                },
            },
        }),
    }),
    resolve: () => ({}),
}
