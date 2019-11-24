import {
    GraphQLString,
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLNonNull
} from 'graphql'
import serverLogType from "../../../Lib/Enums/StatusENUM";
import GraphQLPaginateObject from "../../../Lib/GraphQL/GraphQLPaginateObject";
import GraphQLFilterObject from "../../../Lib/GraphQL/GraphQLFilterObject";

export const Role = new GraphQLObjectType({
    name: 'Role',
    fields: () => ({

        _id: {
            type: GraphQLString,
        },

        _key: {
            type: GraphQLString
        },

        role: {
            type: new GraphQLNonNull(GraphQLString),
            description: "The name of the role.",
        },

    }),
});

// @TODO make paginator
export const RolePaginator = new GraphQLInputObjectType({
    name: 'RolePaginator',
    fields: () => ({
        filter: {
            type: GraphQLFilterObject
        },
        paginate: {
            type: GraphQLPaginateObject
        }
    })
})


export const RoleUpdateInput = new GraphQLInputObjectType({
    name: 'RoleUpdateInput',
    fields: () => ({

        role: {
            type: GraphQLString,
            description: "The name of the role.",
        },

    }),
});

export const RoleCreateInput = new GraphQLInputObjectType({
    name: 'RoleCreateInput',
    fields: () => ({

        role: {
            type: new GraphQLNonNull(GraphQLString),
            description: "The name of the role.",
        },
    }),
});

export const RoleFiltersInput = new GraphQLInputObjectType({
    name: 'RoleFiltersInput',
    fields: () => ({
        // ...documentFilters,
    }),
});
