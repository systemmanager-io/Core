import {queueDebug} from "../../Lib/debug";
// import {redis} from "../../connectors";
// import Queue from "bull"
// import pingServers from "../../Jobs/pingServers";
// import pingAllServers from "../../Jobs/pingAllServers";

// export const pingQueue = new Queue('pingServer', 'redis://127.0.0.1:6379');
// export const pingAllQueue = new Queue('pingAllServers', 'redis://127.0.0.1:6379');

export async function queue() {
    queueDebug("Configuring Queues");


    // pingAllQueue.add({}, {repeat: {every: 60000}});
    queueDebug("Queues Configured");
}

// pingQueue.process(async (job, jobDone) => {
//     return pingServers(job, jobDone);
// });
//
// pingAllQueue.process(async (job, jobDone) => {
//     return pingAllServers(job, jobDone);
// });
