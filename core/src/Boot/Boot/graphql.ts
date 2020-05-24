import * as config from '../../config'
import {app} from "../../connectors";
import {ApolloServer, ApolloServerExpressConfig} from "apollo-server-express";
import {defaultPlaygroundOptions} from "apollo-server-core";
import {graphqlDebug} from "../../Lib/debug";
import adminSchema from "../../GraphQL/AdminSchema/adminSchema";
import getErrorCode from "../../Lib/Errors/getErrorCode";

export default async function graphqlServer() {
    graphqlDebug('Loading GraphQL');

    const graphqlSettings: ApolloServerExpressConfig = {
        playground: {
            ...defaultPlaygroundOptions,
            settings: {
                // "request.credentials": 'include',

            }

        },
        subscriptions: {},
        uploads: {},
        formatError: (err => {
            const error = getErrorCode(err.message);
            if (error !== undefined) {
                return ({message: error.message, statusCode: error.statusCode});
            } else {
                return ({message: err.message, statusCode: 502})
            }
        }),
    };

    new ApolloServer({
        schema: adminSchema,
        ...graphqlSettings,
    }).applyMiddleware({
        app: app,
        path: config.graphql.path + "manage"
    });

    graphqlDebug('GraphQL Loaded');

}
// serverGraphql.applyMiddleware({
//     app: app,
//     path: config.graphql.path + "server"
// });