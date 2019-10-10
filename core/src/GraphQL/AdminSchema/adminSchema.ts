import {GraphQLObjectType, GraphQLSchema} from 'graphql'
import serverMutation from "./servers/serverMutation";
import serverQuery from "./servers/serverQuery";
import serverLogMutation from "./serverLogs/serverLogMutation";

const query = {
    server: serverQuery
};

const mutation = {
    server: serverMutation,
    serverLog: serverLogMutation,
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