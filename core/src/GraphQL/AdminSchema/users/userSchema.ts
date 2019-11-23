import {
    GraphQLString,
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLBoolean
} from 'graphql'
import authMethodType from '../../../Lib/Enums/AuthMethodENUM';

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

        email: {
            type: new GraphQLNonNull(GraphQLString),
            description: "The email of the user"
        },

        authMethod: {
            type: new GraphQLNonNull(authMethodType),
            description: "The way a user is being authenticated, defaults to PASSWORD",
            default: "PASSWORD"
        },

        blocked: {
            type: GraphQLBoolean,
            description: "Toggle this if you want to block a user, defaults to FALSE",
            default: false
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

        email: {
            type: new GraphQLNonNull(GraphQLString),
            description: "The email of the user"
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

        // password: {
        //     type: GraphQLString,
        //     description: "The password of the user, fill in when authMethod PASSWORD is being selected."
        // },
        //
        // password_confirmation: {
        //     type: GraphQLString,
        //     description: "The password of the user, fill in when authMethod PASSWORD is being selected."
        // },

        blocked: {
            type: GraphQLBoolean,
            description: "Toggle this if you want to block a user, defaults to FALSE",
            default: false
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
            type: GraphQLString,
            description: "The username of the user",
        },

        email: {
            type: GraphQLString,
            description: "The email of the user"
        },

        authMethod: {
            type: authMethodType,
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
        },

        blocked: {
            type: GraphQLBoolean,
            description: "Toggle this if you want to block a user, defaults to FALSE",
            default: false
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

        email: {
            type: new GraphQLNonNull(GraphQLString),
            description: "The email of the user"
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
        },

        blocked: {
            type: GraphQLBoolean,
            description: "Toggle this if you want to block a user, defaults to FALSE",
        }

    }),
});

export const UserFiltersInput = new GraphQLInputObjectType({
    name: 'UserFiltersInput',
    fields: () => ({
        // ...documentFilters,
    }),
});
