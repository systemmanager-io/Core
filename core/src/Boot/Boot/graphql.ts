import * as config from '../../config'
import {app} from "../../connectors";
import {ApolloServer, ApolloServerExpressConfig} from "apollo-server-express";
import {defaultPlaygroundOptions} from "apollo-server-core";
import {graphqlDebug} from "../../Lib/debug";
import adminSchema from "../../GraphQL/AdminSchema/adminSchema";
import serverSchema from "../../GraphQL/ServerSchema/serverSchema";
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

    const adminGraphql = new ApolloServer({
        schema: adminSchema,
        ...graphqlSettings,
    });

    const serverGraphql = new ApolloServer({
        schema: serverSchema,
        ...graphqlSettings,
    });

    adminGraphql.applyMiddleware({
        app: app,
        path: config.graphql.path + "admin"
    });

    graphqlDebug('GraphQL Loaded');

}
// serverGraphql.applyMiddleware({
//     app: app,
//     path: config.graphql.path + "server"
// });