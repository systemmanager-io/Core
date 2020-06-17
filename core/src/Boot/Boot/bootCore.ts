import * as config from "../../config";
import {httpServer} from "../../connectors";
import {coreDebug, httpDebug, updateDebug} from "../../Lib/debug";
import graphqlServer from "./graphql";
import {migrate} from "./../../Lib/Arango/migrator";
import {showLogo} from "./showCoreInfo";
import {queue} from "./queues";
import commandLineArgs from "command-line-args";
import installer from "../Installer/installer";
import EventEmitter from "../../Lib/Events";

boot().then(() => {
    coreDebug(
        `---
    
    🚀 SystemManager has been booted and is ready for action.
    
    🚀 SystemManager Core is reachable on the following URIs:
        🌐 GraphQL Requests: http(s)://${config.http.host}:${config.http.port}/manage
        🌐 GraphQL Subscriptions: ws(s)://${config.http.host}:${config.http.port}/manage
    
        🌐 REST Requests: http(s)://${config.http.host}:${config.http.port}
        
    Need support? Contact us via one of the support options at https://systemmanager.io/support
    
---`
    );

});

async function boot() {

    const options = commandLineArgs([
        {name: 'help', alias: 'h'},
        {name: 'install', alias: 'i', type: Boolean, defaultValue: false},
        {name: 'noauth', type: Boolean, defaultValue: false},
        {name: 'nologo', type: Boolean, defaultValue: false},
    ]);


    // This is the boot order of SystemManager. This should make it easier for us to maintain the core.
    if (!options.nologo) await showLogo();
    await migrate(); // We first migrate the DB before showing the installer or booting the engine
    if (options.install) await installer();
    await queue();

    const testing123 = new EventEmitter;

    let testfunc = (arg1: string, arg2: string) => {
        console.log("Something happened", arg1, arg2)
    }
    testing123.on("save", testfunc)

    setInterval(() => {
        testing123.emit('save', 'testing', 'testing2')
    }, 1000)

    httpServer.listen(config.http.port, config.http.host);
    await graphqlServer();
}


// @TODO WILL GET REMOVED AFTER I HAVE A "UPDATER"
// updateDebug(`---
//
// ⬆ New update available
// ⬆ Newest version is Version 0.0.2
//
// ---`);
