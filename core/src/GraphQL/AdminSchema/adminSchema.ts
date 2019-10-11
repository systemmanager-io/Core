import {GraphQLObjectType, GraphQLSchema} from 'graphql'
import serverMutation from "./servers/serverMutation";
import serverQuery from "./servers/serverQuery";
import serverLogMutation from "./serverLogs/serverLogMutation";
import serverLogQuery from "./serverLogs/serverLogQuery";
import settingQuery from "./settings/settingQuery";
import settingMutation from "./settings/settingMutation";

const query = {
    server: serverQuery,
    serverLog: serverLogQuery,
    setting: settingQuery
};

const mutation = {
    server: serverMutation,
    serverLog: serverLogMutation,
    setting: settingMutation
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