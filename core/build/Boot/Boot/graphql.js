"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const apollo_server_core_1 = require("apollo-server-core");
const debug_1 = require("../../Lib/debug");
const adminSchema_1 = __importDefault(require("../../GraphQL/Schemas/adminSchema"));
async function graphqlServer() {
    debug_1.graphqlDebug('Booting GraphQL');
    // const schema = await adminSchema();
    const schema = adminSchema_1.default;
    const graphqlServer = new apollo_server_express_1.ApolloServer({
        schema: schema,
        playground: Object.assign({}, apollo_server_core_1.defaultPlaygroundOptions, { settings: {
            // "request.credentials": 'include',
            } }),
        subscriptions: {},
        uploads: {},
    });
    debug_1.graphqlDebug('GraphQL Booted');
}
exports.default = graphqlServer;
