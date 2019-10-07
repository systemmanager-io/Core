"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const debugs_1 = require("../Lib/debugs");
function default_1(job, jobDone) {
    debugs_1.workerDebug("Pinging Server on" + job.process.pid);
    console.log("Pinging Server");
    jobDone();
}
exports.default = default_1;
