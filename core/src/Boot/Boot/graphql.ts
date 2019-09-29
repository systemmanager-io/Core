import * as config from '../../config'
import {app} from "../../connectors";
import {ApolloServer} from "apollo-server-express";
import {defaultPlaygroundOptions} from "apollo-server-core";
import {graphqlDebug} from "../../Lib/debug";
import adminSchema from "../../GraphQL/AdminSchema/adminSchema";
import getErrorCode from "../../Lib/Errors/getErrorCode";

export default async function graphqlServer() {
    graphqlDebug('Loading GraphQL');

    const schema = adminSchema;
    const graphqlServer = new ApolloServer({
        schema: schema,
        playground: {
            ...defaultPlaygroundOptions,
            settings: {
                // "request.credentials": 'include',

            }
        },
        // @ts-ignore
        formatError: (err => {
            const error = getErrorCode(err.message);
            return ({message: error.message, statusCode: error.statusCode});
        }),
        subscriptions: {},
        uploads: {},
    });

    graphqlServer.applyMiddleware({
        app: app,
        path: config.graphql.path
    })

    graphqlDebug('GraphQL Loaded');

}
