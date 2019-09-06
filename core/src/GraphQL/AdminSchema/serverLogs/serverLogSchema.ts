import {
    GraphQLString,
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLNonNull
} from 'graphql'

export const ServerLog = new GraphQLObjectType({
    name: 'ServerLog',
    fields: () => ({

        serverId: {
            type: new GraphQLNonNull(GraphQLString),
            description: "The serverId of the server.",
        },
        status: {
            type: new GraphQLNonNull(GraphQLString),
            description: "The status of the ServerLog.",
        },
        reason: {
            type: GraphQLString,
            description: "The reason the server went offline"
        }

    }),
});

// @TODO make paginator

export const ServerLogUpdateInput = new GraphQLInputObjectType({
    name: 'ServerLogUpdateInput',
    fields: () => ({

        serverId: {
            type: GraphQLString,
        },
        status: {
            type: GraphQLString,
        },

        reason: {
            type: GraphQLString,
        }

    }),
});

export const ServerLogCreateInput = new GraphQLInputObjectType({
    name: 'ServerLogCreateInput',
    fields: () => ({

        serverId: {
            type: new GraphQLNonNull(GraphQLString),
        },
        status: {
            type: new GraphQLNonNull(GraphQLString),
        },
        reason: {
            type: GraphQLString,
        }

    }),
});

export const ServerLogFiltersInput = new GraphQLInputObjectType({
    name: 'ServerLogFiltersInput',
    fields: () => ({
        // ...documentFilters,
    }),
});
