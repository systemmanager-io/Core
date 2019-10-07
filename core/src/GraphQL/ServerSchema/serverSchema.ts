import {GraphQLObjectType, GraphQLSchema} from 'graphql'
import serverStatusQuery from "./serverStatus/serverStatusQuery";
import serverStatusMutation from "./serverStatus/serverStatusMutation";

const query = {
    serverStatus: serverStatusQuery
};

const mutation = {
    serverStatus: serverStatusMutation,
};

export default new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'ServerQueries',
        fields: query,
    }),
    mutation: new GraphQLObjectType({
        name: 'ServerMutations',
        fields: mutation,
    }),
});