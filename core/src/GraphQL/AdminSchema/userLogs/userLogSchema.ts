import {
    GraphQLString,
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLID
} from 'graphql'
import GraphQLPaginateObject from "../../../Lib/GraphQL/GraphQLPaginateObject";
import GraphQLFilterObject from "../../../Lib/GraphQL/GraphQLFilterObject";

export const UserLog = new GraphQLObjectType({
    name: 'UserLog',
    fields: () => ({

        _id: {
            type: GraphQLString,
        },

        _key: {
            type: GraphQLString
        },

        event: {
            type: new GraphQLNonNull(GraphQLString),
            description: "The userId of the user.",
        },
        userId: {
            type: new GraphQLNonNull(GraphQLID),
            description: "Type of the log.",
        },

    }),
});

// @TODO make paginator
export const UserLogPaginator = new GraphQLInputObjectType({
    name: 'UserLogPaginator',
    fields: () => ({
        filter: {
            type: GraphQLFilterObject
        },
        paginate: {
            type: GraphQLPaginateObject
        }
    })
})


export const UserLogUpdateInput = new GraphQLInputObjectType({
    name: 'UserLogUpdateInput',
    fields: () => ({

        event: {
            type: GraphQLString,
            description: "The userId of the user.",
        },
        userId: {
            type: GraphQLID,
            description: "Type of the log.",
        },

    }),
});

export const UserLogCreateInput = new GraphQLInputObjectType({
    name: 'UserLogCreateInput',
    fields: () => ({

        event: {
            type: new GraphQLNonNull(GraphQLString),
            description: "The userId of the user.",
        },
        userId: {
            type: new GraphQLNonNull(GraphQLID),
            description: "Type of the log.",
        },

    }),
});

export const UserLogFiltersInput = new GraphQLInputObjectType({
    name: 'UserLogFiltersInput',
    fields: () => ({
        // ...documentFilters,
    }),
});
