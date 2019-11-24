import {GraphQLObjectType, GraphQLBoolean, GraphQLList, GraphQLNonNull, GraphQLID} from 'graphql'
import {RoleUpdateInput, RoleCreateInput, Role} from './roleSchema'
import roleModel from "../../../ArangoDB/Models/DocumentModels/Permissions/roleModel";

export default {
    type: new GraphQLObjectType({
        name: 'RoleMutations',
        fields: () => ({
            create: {
                type: Role,
                args: {
                    data: {
                        type: new GraphQLNonNull(RoleCreateInput),
                        description: "Create an new Role entry in SystemManager"
                    },
                },
                resolve(root, args) {
                    return roleModel.insert(args.data);
                },
            },
            update: {
                type: Role,
                args: {
                    selector: {
                        type: new GraphQLNonNull(GraphQLID),
                        description: "Update an Role entry in Systemmanager",
                    },
                    data: {
                        type: new GraphQLNonNull(RoleUpdateInput),
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
                        description: "Delete Role entries in systemmanager.",
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