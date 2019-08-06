import {workerDebug} from "../Lib/debugs";

export default function (job, jobDone) {
    workerDebug("Pinging Server on" + job.process.pid);
    console.log("Pinging Server");
    jobDone();
}