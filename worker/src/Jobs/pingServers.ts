import {workerDebug} from "../Lib/debugs";

export default function (job: any, done: any) {
    workerDebug("Pinging Server on" + job.process.pid);
    console.log("Pinging Server");
    done();
}