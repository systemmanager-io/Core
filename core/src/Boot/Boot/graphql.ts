import * as config from '../../config'
import {app} from "../../connectors";
import {ApolloServer} from "apollo-server-express";
import {defaultPlaygroundOptions} from "apollo-server-core";
import {graphqlDebug} from "../../Lib/debug";
import adminSchema from "../../GraphQL/AdminSchema/adminSchema";


export default async function graphqlServer() {
    graphqlDebug('Booting GraphQL');

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
