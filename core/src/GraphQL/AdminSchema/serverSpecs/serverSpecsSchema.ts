import {
    GraphQLString,
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLNonNull
} from 'graphql'

export const ServerSpecs = new GraphQLObjectType({
    name: 'ServerSpecs',
    fields: () => ({

        // CPU: {
        //     name: 'CPU',
        // },
        // RAM: {
        //     type: new GraphQLNonNull(GraphQLString),
        //     description: "The value of the setting.",
        // },
        // GPU: {},
        // MOBO: {},
        // DISKS: {},

    }),
});

// @TODO make paginator

export const ServerSpecsUpdateInput = new GraphQLInputObjectType({
    name: 'ServerSpecsUpdateInput',
    fields: () => ({

        key: {
            type: GraphQLString,
        },
        value: {
            type: GraphQLString,
        },

    }),
});

export const ServerSpecsCreateInput = new GraphQLInputObjectType({
    name: 'ServerSpecsCreateInput',
    fields: () => ({

        key: {
            type: new GraphQLNonNull(GraphQLString),
        },
        value: {
            type: new GraphQLNonNull(GraphQLString),
        },

    }),
});

export const ServerSpecsFiltersInput = new GraphQLInputObjectType({
    name: 'ServerSpecsFiltersInput',
    fields: () => ({
        // ...documentFilters,
    }),
});
