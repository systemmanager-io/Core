import {workerDebug} from "../Lib/debug";
import serverModel from "../ArangoDB/Models/DocumentModels/serverModel";

export default async function (job: any, done: any) {

    const server = await serverModel.find(job.data.server);
    if (server === null || server === undefined) {
        done();
        return;
    }
    workerDebug("Pinging", server.name);

    console.log(server);

    done();
};