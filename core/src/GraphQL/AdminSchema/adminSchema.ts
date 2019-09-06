import {GraphQLObjectType, GraphQLSchema} from 'graphql'
import serverMutation from "./servers/serverMutation";
import serverQuery from "./servers/serverQuery";

const query = {
    servers: serverQuery
};

const mutation = {
    servers: serverMutation,
};

export default new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'AdminQueries',
        fields: query,
    }),
    mutation: new GraphQLObjectType({
        name: 'AdminMutations',
        fields: mutation,
    }),
});