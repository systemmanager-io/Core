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
    httpDebug(`🚀 SystemManager took {time} to boot`);
    httpDebug(`🚀 SystemManager ready at http://${config.http.host}:${config.http.port}`);
    httpDebug(`🚀 SystemManager Subscriptions ready at ws://${config.http.host}:${config.http.port}`);
});

