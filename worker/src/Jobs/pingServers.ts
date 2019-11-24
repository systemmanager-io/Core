import {workerDebug} from "../Lib/debug";

export default function (job: any, done: any) {
    workerDebug("Pinging Server on" + job.process.pid);
    console.log("Pinging Server");
    done();
}