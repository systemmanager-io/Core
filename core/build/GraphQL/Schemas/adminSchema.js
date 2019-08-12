"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const serverMutation_1 = __importDefault(require("./servers/serverMutation"));
const serverQuery_1 = __importDefault(require("./servers/serverQuery"));
const query = {
    servers: serverQuery_1.default
};
const mutation = {
    servers: serverMutation_1.default,
};
exports.default = new graphql_1.GraphQLSchema({
    query: new graphql_1.GraphQLObjectType({
        name: 'AdminQuery',
        fields: query,
    }),
    mutation: new graphql_1.GraphQLObjectType({
        name: 'AdminMutation',
        fields: mutation,
    }),
});
