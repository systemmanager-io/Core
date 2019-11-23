import {GraphQLObjectType, GraphQLSchema} from 'graphql'
import serverMutation from "./servers/serverMutation";
import serverQuery from "./servers/serverQuery";
import serverLogMutation from "./serverLogs/serverLogMutation";
import serverLogQuery from "./serverLogs/serverLogQuery";
import settingQuery from "./settings/settingQuery";
import settingMutation from "./settings/settingMutation";
import userQuery from "./users/userQuery";
import userMutation from "./users/userMutation";
import roleQuery from "./roles/roleQuery";
import roleMutation from "./roles/roleMutation";
import permissionQuery from "./permissions/permissionQuery";
import permissionMutation from "./permissions/permissionMutation";
import userLogQuery from "./userLogs/userLogQuery";
import userLogMutation from "./userLogs/userLogMutation";

const query = {
    server: serverQuery,
    serverLog: serverLogQuery,
    userLog: userLogQuery,
    setting: settingQuery,
    user: userQuery,


    role: roleQuery,
    permission: permissionQuery
};

const mutation = {
    server: serverMutation,
    serverLog: serverLogMutation,
    userLog: userLogMutation,
    setting: settingMutation,
    user: userMutation,


    role: roleMutation,
    permission: permissionMutation
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