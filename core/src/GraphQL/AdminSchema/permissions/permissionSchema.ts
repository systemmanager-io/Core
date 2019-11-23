import {
    GraphQLString,
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLNonNull
} from 'graphql'
import serverLogType from "../../../Lib/Enums/StatusENUM";
import GraphQLPaginateObject from "../../../Lib/GraphQL/GraphQLPaginateObject";
import GraphQLFilterObject from "../../../Lib/GraphQL/GraphQLFilterObject";

export const Permission = new GraphQLObjectType({
    name: 'Permission',
    fields: () => ({

        _id: {
            type: GraphQLString,
        },

        _key: {
            type: GraphQLString
        },

        permission: {
            type: new GraphQLNonNull(GraphQLString),
            description: "The name of the permission.",
        },

    }),
});

// @TODO make paginator
export const PermissionPaginator = new GraphQLInputObjectType({
    name: 'PermissionPaginator',
    fields: () => ({
        filter: {
            type: GraphQLFilterObject
        },
        paginate: {
            type: GraphQLPaginateObject
        }
    })
})


export const PermissionUpdateInput = new GraphQLInputObjectType({
    name: 'PermissionUpdateInput',
    fields: () => ({

        permission: {
            type: GraphQLString,
            description: "The name of the permission.",
        },

    }),
});

export const PermissionCreateInput = new GraphQLInputObjectType({
    name: 'PermissionCreateInput',
    fields: () => ({

        permission: {
            type: new GraphQLNonNull(GraphQLString),
            description: "The name of the permission.",
        },
    }),
});

export const PermissionFiltersInput = new GraphQLInputObjectType({
    name: 'PermissionFiltersInput',
    fields: () => ({
        // ...documentFilters,
    }),
});
