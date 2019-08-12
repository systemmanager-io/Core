import * as express from "express";
import {app, httpServer} from "../../connectors";
import {httpDebug} from "../../Lib/debug";
import * as config from "../../config";
import graphqlServer from "./graphql";


async function bootCore() {
    httpServer.listen(config.http.port, config.http.host);
    await graphqlServer();

}


bootCore().then(() => {
    httpDebug(`🚀 Server ready at http://localhost:${config.http.port}`);
    httpDebug(`🚀 Subscriptions ready at ws://localhost:${config.http.port}`);
});
