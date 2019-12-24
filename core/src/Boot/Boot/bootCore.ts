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
    httpDebug(`🚀 SystemManager subscriptions ready at ws://${config.http.host}:${config.http.port}`);

    // httpDebug(`---`);
    // httpDebug(``);
    // httpDebug(`🚀 SystemManager is ready and on the following endpoints`);
    // httpDebug(`🚀 HTTP: http://${config.http.host}:${config.http.port}`);
    // httpDebug(`🚀 Subscriptions: ws://${config.http.host}:${config.http.port}`);
    // httpDebug(``);
    // httpDebug(`---`);
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