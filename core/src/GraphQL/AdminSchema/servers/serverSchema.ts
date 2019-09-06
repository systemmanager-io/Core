import {
    GraphQLString,
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLBoolean,
    GraphQLInt
} from 'graphql'

export const Server = new GraphQLObjectType({
    name: 'Server',
    fields: () => ({

        name: {
            type: new GraphQLNonNull(GraphQLString),
            description: "The name of the server.",
        },
        ip: {
            type: new GraphQLNonNull(GraphQLString),
            description: "The IP of the server",
        },
        description: {
            type: GraphQLString,
            description: "The description of the server",
        },
        portableMode: {
            type: GraphQLBoolean,
            description: "Determines if the panel should ping the server",
        },
        port: {
            type: GraphQLInt,
            description: "The port of the server."
        }

    }),
});

// @TODO make paginator

export const ServerUpdateInput = new GraphQLInputObjectType({
    name: 'ServerUpdateInput',
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

export const ServerCreateInput = new GraphQLInputObjectType({
    name: 'ServerCreateInput',
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

export const ServerFiltersInput = new GraphQLInputObjectType({
    name: 'ServerFiltersInput',
    fields: () => ({
        // ...documentFilters,
    }),
});
