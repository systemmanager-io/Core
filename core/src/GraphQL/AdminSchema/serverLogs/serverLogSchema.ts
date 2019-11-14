import {
    GraphQLString,
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLNonNull
} from 'graphql'
import serverLogType from "../../../Lib/Enums/StatusENUM";
import GraphQLPaginateObject from "../../../Lib/GraphQL/GraphQLPaginateObject";
import GraphQLFilterObject from "../../../Lib/GraphQL/GraphQLFilterObject";

export const ServerLog = new GraphQLObjectType({
    name: 'ServerLog',
    fields: () => ({

        _id: {
            type: GraphQLString,
        },

        _key: {
            type: GraphQLString
        },

        serverId: {
            type: new GraphQLNonNull(GraphQLString),
            description: "The serverId of the server.",
        },
        type: {
            type: new GraphQLNonNull(serverLogType),
            description: "Type of the log.",
        },
        status: {
            type: new GraphQLNonNull(GraphQLString),
            description: "The status of the ServerLog.",
        },
        reason: {
            type: GraphQLString,
            description: "Reason for the creation of the Log"
        }

    }),
});

// @TODO make paginator
export const ServerLogPaginator = new GraphQLInputObjectType({
    name: 'ServerLogPaginator',
    fields: () => ({
        filter: {
            type: GraphQLFilterObject
        },
        paginate: {
            type: GraphQLPaginateObject
        }
    })
})


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
