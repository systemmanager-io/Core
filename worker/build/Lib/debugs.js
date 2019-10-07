"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const debug = require("debug");
const appDebug = debug('systemmanager');
exports.workerDebug = appDebug.extend('worker');
exports.workerDebug.enabled = true;
