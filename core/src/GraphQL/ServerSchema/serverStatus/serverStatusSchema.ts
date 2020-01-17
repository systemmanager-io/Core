import {
    GraphQLString,
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLBoolean,
    GraphQLInt
} from 'graphql'

export const ServerStatus = new GraphQLObjectType({
    name: 'ServerStatus',
    fields: () => ({

        //...document

        _id: {
            type: GraphQLString,
        },

        _key: {
            type: GraphQLString
        },


    }),
});



export const ServerStatusUpdateInput = new GraphQLInputObjectType({
    name: 'ServerStatusUpdateInput',
    fields: () => ({

        name: {
            type: GraphQLString,
        },
        ip: {
            type: GraphQLString,
        },
        description: {
            type: GraphQLString,
        },
        portableMode: {
            type: GraphQLBoolean,
        },
        port: {
            type: GraphQLInt,
        }

    }),
});

export const ServerStatusCreateInput = new GraphQLInputObjectType({
    name: 'ServerStatusCreateInput',
    fields: () => ({

        name: {
            type: new GraphQLNonNull(GraphQLString),
        },
        ip: {
            type: new GraphQLNonNull(GraphQLString),
        },
        description: {
            type: GraphQLString,
        },
        portableMode: {
            type: GraphQLBoolean,
            defaultValue: false,
        },
        port: {
            type: GraphQLInt,
            defaultValue: 8181
        }

    }),
});

export const ServerStatusFiltersInput = new GraphQLInputObjectType({
    name: 'ServerStatusFiltersInput',
    fields: () => ({
        // ...documentFilters,
    }),
});

// @TODO make paginator
export const ServerStatusPaginator = new GraphQLInputObjectType({
    name: 'ServerStatusPaginator',
    fields: () => ({
        filter: {
            type: GraphQLString
        }
    })
});
