import {GraphQLObjectType, GraphQLBoolean, GraphQLInputObjectType} from "graphql";

export const ServerAction = new GraphQLObjectType({
    name: 'ServerAction',
    fields: () => ({
        selector: {
            type: GraphQLBoolean,
            description: "The ID of the server to do the action on"
        }
    })
});

export const ServerActionInput = new GraphQLInputObjectType({
    name: "ServerActionInput",
    fields: () => ({
        action: {
            type: GraphQLBoolean,
        }
    })
});