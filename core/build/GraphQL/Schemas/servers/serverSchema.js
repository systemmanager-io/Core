"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
// import {DocumentInterface, documentFields, documentFilters} from "../../Interfaces/DocumentInterface";
// import createPaginator from "../../../Functions/GraphQL/createPaginator";
exports.User = new graphql_1.GraphQLObjectType({
    name: 'User',
    // interfaces: () => [DocumentInterface],
    fields: () => ({
        // ...documentFields(false),
        name: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
            description: 'The name of the user.',
        },
        email: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
            description: 'The email of a user.',
        },
    }),
});
// export const UserPaginator = createPaginator('User', User);
exports.UserUpdateInput = new graphql_1.GraphQLInputObjectType({
    name: 'UserUpdateInput',
    fields: () => ({
        name: {
            type: graphql_1.GraphQLString,
            description: 'The name of the user.',
        },
        email: {
            type: graphql_1.GraphQLString,
            description: 'The email of a user.',
        },
    }),
});
exports.UserCreateInput = new graphql_1.GraphQLInputObjectType({
    name: 'UserCreateInput',
    fields: () => ({
        name: {
            type: graphql_1.GraphQLString,
            description: 'The name of the user.',
        },
        email: {
            type: graphql_1.GraphQLString,
            description: 'The email of a user.',
        },
    }),
});
exports.UserFiltersInput = new graphql_1.GraphQLInputObjectType({
    name: 'UserFiltersInput',
    fields: () => ({
    // ...documentFilters,
    }),
});
