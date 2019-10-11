import {
    GraphQLString,
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLNonNull
} from 'graphql'
import authMethodType from '../../../Lib/Types/GraphQL/AuthMethodENUM';

export const User = new GraphQLObjectType({
    name: 'User',
    fields: () => ({

        _id: {
            type: GraphQLString,
        },

        _key: {
            type: GraphQLString
        },

        name: {
            type: GraphQLString,
            description: "The name of the user. If not set the username will be shown instead",
        },
        username: {
            type: new GraphQLNonNull(GraphQLString),
            description: "The username of the user",
        },

        authMethod: {
            type: new GraphQLNonNull(authMethodType),
            description: "The way a user is being authenticated, defaults to PASSWORD",
            default: "PASSWORD"
        }

    }),
});
export const UserInput = new GraphQLObjectType({
    name: 'UserInput',
    fields: () => ({

        _id: {
            type: GraphQLString,
        },

        _key: {
            type: GraphQLString
        },


        name: {
            type: GraphQLString,
            description: "The name of the user. If not set the username will be shown instead",
        },
        username: {
            type: new GraphQLNonNull(GraphQLString),
            description: "The username of the user",
        },

        authMethod: {
            type: new GraphQLNonNull(authMethodType),
            description: "The way a user is being authenticated, defaults to PASSWORD",
            default: "PASSWORD"
        },

        password: {
            type: GraphQLString,
            description: "The password of the user, fill in when authMethod PASSWORD is being selected."
        },

        password_confirmation: {
            type: GraphQLString,
            description: "The password of the user, fill in when authMethod PASSWORD is being selected."
        }
    }),
});

// @TODO make paginator
export const UserPaginator = new GraphQLInputObjectType({
    name: 'UserPaginator',
    fields: () => ({
        filter: {
            type: GraphQLString
        }
    })
})

export const UserUpdateInput = new GraphQLInputObjectType({
    name: 'UserUpdateInput',
    fields: () => ({

        name: {
            type: GraphQLString,
            description: "The name of the user. If not set the username will be shown instead",
        },
        username: {
            type: new GraphQLNonNull(GraphQLString),
            description: "The username of the user",
        },

        authMethod: {
            type: authMethodType,
            description: "The way a user is being authenticated, defaults to PASSWORD",
            default: "PASSWORD"
        },

        password: {
            type: new GraphQLNonNull(GraphQLString),
            description: "The password of the user, fill in when authMethod PASSWORD is being selected."
        },

        password_confirmation: {
            type: new GraphQLNonNull(GraphQLString),
            description: "The password of the user, fill in when authMethod PASSWORD is being selected."
        }
    }),
});

export const UserCreateInput = new GraphQLInputObjectType({
    name: 'UserCreateInput',
    fields: () => ({

        name: {
            type: GraphQLString,
            description: "The name of the user. If not set the username will be shown instead",
        },
        username: {
            type: new GraphQLNonNull(GraphQLString),
            description: "The username of the user",
        },

        authMethod: {
            type: authMethodType,
            description: "The way a user is being authenticated, defaults to PASSWORD",
            default: "PASSWORD"
        },

        password: {
            type: new GraphQLNonNull(GraphQLString),
            description: "The password of the user, fill in when authMethod PASSWORD is being selected."
        },

        password_confirmation: {
            type: new GraphQLNonNull(GraphQLString),
            description: "The password of the user, fill in when authMethod PASSWORD is being selected."
        }

    }),
});

export const UserFiltersInput = new GraphQLInputObjectType({
    name: 'UserFiltersInput',
    fields: () => ({
        // ...documentFilters,
    }),
});
