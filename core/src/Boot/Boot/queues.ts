import {queueDebug} from "../../Lib/debug";
import {redis} from "../../connectors";

const Bull = require('bull');
export const pingQueue = new Bull('pingQueue');

export async function queue() {

    queueDebug("Configuring queues and jobs");

    redis.echo("Test").then(result => console.log);

    pingQueue.add("TEST").then((r: any) => console.log("Job Added"));

    pingQueue.process(function (job: any, jobDone: any) {
        console.log("Job Done!", job);
        jobDone();
    }).then((r: any) => console.log("Job Processed"))
}