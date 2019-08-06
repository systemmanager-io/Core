"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = require("../../Lib/debug");
const Bull = require('bull');
debug_1.coreDebug("Configuring queues and jobs");
exports.pingQueue = new Bull('pingQueue');
for (let i = 0; i < 1; i++) {
    exports.pingQueue.add({ ip: "0.0.0.0" }).then(() => debug_1.coreDebug("Job Processed")).catch((err) => debug_1.coreDebug(err));
    debug_1.coreDebug("added Job");
}
