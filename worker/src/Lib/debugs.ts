import debug = require("debug");

const appDebug = debug('systemmanager');
export const workerDebug = appDebug.extend('worker');

workerDebug.enabled = true;