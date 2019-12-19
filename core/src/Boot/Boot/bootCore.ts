import * as config from "../../config";
import {httpServer} from "../../connectors";
import {httpDebug} from "../../Lib/debug";
import graphqlServer from "./graphql";
import {migrate} from "./migrations";
import {showLogo} from "./showCoreInfo";
import {queue} from "./queues";
import commandLineArgs from "command-line-args";
import installer from "../Installer/installer";

boot().then((bootTime: any) => {
    // httpDebug(`🚀 SystemManager took ${bootTime} seconds to boot`);
    httpDebug(`🚀 SystemManager ready at http://${config.http.host}:${config.http.port}`);
    httpDebug(`🚀 SystemManager Subscriptions ready at ws://${config.http.host}:${config.http.port}`);
});

async function boot() {
    // This is the boot order of SystemManager. This should make it easier for us to maintain the core.
    const options = commandLineArgs([
        { name: 'help', alias: 'h'},
        { name: 'install', alias: 'i', type: Boolean, defaultValue: false},
        { name: 'no-auth', type: Boolean, defaultValue: false, },
    ]);

    await showLogo();
    await migrate(); // We first migrate the DB before showing the installer or booting the engine
    if(options.install) await installer();
    await queue();

    httpServer.listen(config.http.port, config.http.host);
    await graphqlServer();
}