import {GraphQLObjectType, GraphQLSchema} from 'graphql'
import serverMutation from "./servers/serverMutation";
import serverQuery from "./servers/serverQuery";
import serverLogMutation from "./serverLogs/serverLogMutation";
import serverLogQuery from "./serverLogs/serverLogQuery";
import settingQuery from "./settings/settingQuery";
import settingMutation from "./settings/settingMutation";
import userQuery from "./users/userQuery";
import userMutation from "./users/userMutation";

const query = {
    server: serverQuery,
    serverLog: serverLogQuery,
    setting: settingQuery,
    user: userQuery
};

const mutation = {
    server: serverMutation,
    serverLog: serverLogMutation,
    setting: settingMutation,
    user: userMutation
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