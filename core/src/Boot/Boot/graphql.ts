import * as config from '../../config'
import {app, httpServer, router} from "../../connectors";
import {ApolloServer} from "apollo-server-express";
import {execute, subscribe} from "graphql";
import {defaultPlaygroundOptions} from "apollo-server-core";
import {graphqlDebug} from "../../Lib/debug";
import adminSchema from "../../GraphQL/Schemas/adminSchema";


export default async function graphqlServer() {
    graphqlDebug('Booting GraphQL');

    // const schema = await adminSchema();
    const schema = adminSchema;

    const graphqlServer = new ApolloServer({
        schema: schema,

        playground: {
            ...defaultPlaygroundOptions,
            settings: {
                // "request.credentials": 'include',

            }
        },
        subscriptions: {},
        uploads: {},
    });
    graphqlServer.applyMiddleware({
        app: app,
        path: config.graphql.path
    })

    graphqlDebug('GraphQL Booted');

}
