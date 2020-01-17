import * as config from "../../config";
import {httpServer} from "../../connectors";
import {coreDebug, httpDebug, updateDebug} from "../../Lib/debug";
import graphqlServer from "./graphql";
import {migrate} from "./migrations";
import {showLogo} from "./showCoreInfo";
import {queue} from "./queues";
import commandLineArgs from "command-line-args";
import installer from "../Installer/installer";

boot().then(() => {
    coreDebug(`---
    
    🚀 SystemManager is ready
    
    🚀 GraphQL Requests: http://${config.http.host}:${config.http.port}
    🚀 Subscriptions: ws://${config.http.host}:${config.http.port}
    
---`);

    // WILL GET REMOVED AFTER I HAVE A "UPDATER"
    updateDebug(`---
    
    ⬆ New update available
    ⬆ Newest version is Version 0.0.2
    
---`);

});

async function boot() {

    const options = commandLineArgs([
        {name: 'help', alias: 'h'},
        {name: 'install', alias: 'i', type: Boolean, defaultValue: false},
        {name: 'noauth', type: Boolean, defaultValue: false,},
        {name: 'nologo', type: Boolean, defaultValue: false,},
    ]);


    // This is the boot order of SystemManager. This should make it easier for us to maintain the core.
    if (!options.nologo) await showLogo();
    await migrate(); // We first migrate the DB before showing the installer or booting the engine
    if (options.install) await installer();
    await queue();

    httpServer.listen(config.http.port, config.http.host);
    await graphqlServer();
}