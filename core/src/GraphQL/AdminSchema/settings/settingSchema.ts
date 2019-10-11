import {
    GraphQLString,
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLNonNull
} from 'graphql'

export const Setting = new GraphQLObjectType({
    name: 'Setting',
    fields: () => ({

        key: {
            type: new GraphQLNonNull(GraphQLString),
            description: "The key of the setting.",
        },
        value: {
            type: new GraphQLNonNull(GraphQLString),
            description: "The value of the setting.",
        },

    }),
});

// @TODO make paginator
export const SettingPaginator = new GraphQLInputObjectType({
    name: 'SettingPaginator',
    fields: () => ({
        filter: {
            type: GraphQLString
        }
    })
})

export const SettingUpdateInput = new GraphQLInputObjectType({
    name: 'SettingUpdateInput',
    fields: () => ({

        key: {
            type: GraphQLString,
        },
        value: {
            type: GraphQLString,
        },

    }),
});

export const SettingCreateInput = new GraphQLInputObjectType({
    name: 'SettingCreateInput',
    fields: () => ({

        key: {
            type: new GraphQLNonNull(GraphQLString),
        },
        value: {
            type: new GraphQLNonNull(GraphQLString),
        },

    }),
});

export const SettingFiltersInput = new GraphQLInputObjectType({
    name: 'SettingFiltersInput',
    fields: () => ({
        // ...documentFilters,
    }),
});
