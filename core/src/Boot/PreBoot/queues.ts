import {queueDebug} from "../../Lib/debug";
import {redis} from "../../connectors";

const Bull = require('bull');

queueDebug("Configuring queues and jobs");
export const pingQueue = new Bull('pingQueue', redis);

// pingQueue.add("TEST").then(console.log("Job proccessed/run"));