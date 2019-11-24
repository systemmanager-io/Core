import * as graphql from 'graphql'
import {Permission, PermissionPaginator} from './permissionSchema'
import roleModel from '../../../ArangoDB/Models/DocumentModels/Permissions/permissionModel';

export default {
    type: new graphql.GraphQLObjectType({
        name: 'PermissionQueries',
        fields: () => ({
            list: {
                type: new graphql.GraphQLList(Permission),
                description: "Get a list of current serverLog entries in SystemManager",
                args: {
                    paginator: {
                        type: PermissionPaginator,
                        description: "Create an new Permission entry in SystemManager"
                    },
                },
                resolve(root, args) {
                    return roleModel.list(args.paginator);
                }
            },
            get: {
                type: Permission,
                description: 'Retrieve the serverLog information by its ID or Key',
                args: {
                    selector: {
                        type: new graphql.GraphQLNonNull(graphql.GraphQLID),
                        description: 'Get an Permission entry by its _id or _key',
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
