import {GraphQLObjectType, GraphQLSchema} from 'graphql'
import serverMutation from "./servers/serverMutation";
import serverQuery from "./servers/serverQuery";
import serverLogMutation from "./serverLogs/serverLogMutation";
import serverLogQuery from "./serverLogs/serverLogQuery";

const query = {
    server: serverQuery,
    serverLog: serverLogQuery
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