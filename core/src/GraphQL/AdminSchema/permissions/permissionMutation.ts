import {GraphQLObjectType, GraphQLBoolean, GraphQLList, GraphQLNonNull, GraphQLID} from 'graphql'
import {PermissionUpdateInput, PermissionCreateInput, Permission} from './permissionSchema'
import roleModel from "../../../ArangoDB/Models/DocumentModels/Permissions/permissionModel";

export default {
    type: new GraphQLObjectType({
        name: 'PermissionMutations',
        fields: () => ({
            create: {
                type: Permission,
                args: {
                    data: {
                        type: new GraphQLNonNull(PermissionCreateInput),
                        description: "Create an new Permission entry in SystemManager"
                    },
                },
                resolve(root, args) {
                    return roleModel.insert(args.data);
                },
            },
            update: {
                type: Permission,
                args: {
                    selector: {
                        type: new GraphQLNonNull(GraphQLID),
                        description: "Update an Permission entry in Systemmanager",
                    },
                    data: {
                        type: new GraphQLNonNull(PermissionUpdateInput),
                    },
                },
                resolve(root, args) {
                    return roleModel.update(args.selector, args.data);
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
                        description: "Delete Permission entries in systemmanager.",
                    },
                },
                async resolve(root, args) {
                    const selectors = args.selectors;

                    selectors.map(async (data:any) => {
                        await roleModel.remove(data);
                    });
                    return true
                }
            },
        }),
    }),
    resolve: () => ({}),
}