import {coreDebug} from "../../Lib/debug";

const Bull = require('bull');

coreDebug("Configuring queues and jobs");
export const pingQueue = new Bull('pingQueue');