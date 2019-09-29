import {queueDebug} from "../../Lib/debug";

const Bull = require('bull');

queueDebug("Configuring queues and jobs");
export const pingQueue = new Bull('pingQueue');