import {coreDebug} from "../../Lib/debug";

const Bull = require('bull');

coreDebug("Configuring queues and jobs");
export const pingQueue = new Bull('pingQueue');

for (let i = 0; i < 1; i++) {
    pingQueue.add({ip: "0.0.0.0"}).then(() => coreDebug("Job Processed")).catch((err: any) => coreDebug(err));
    coreDebug("added Job")
}
