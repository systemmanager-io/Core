"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pingServers_1 = __importDefault(require("./Jobs/pingServers"));
let Queue = require('bull');
let cluster = require('cluster');
console.log("Bootin");
const numWorkers = 1;
let pingQueue = new Queue("pingQueue", { redis: { port: 6379, host: '127.0.0.1' } });
// if (cluster.isMaster) {
//     for (let i = 0; i < numWorkers; i++) {
//         cluster.fork();
//         console.log("Adding worker")
//     }
//
//     cluster.on('exit', function (worker: any, code: any, signal: any) {
//         console.log('worker ' + worker.process.pid + ' died');
//     });
//     pingQueue.on('completed', function (job: any, result: any) {
//         console.log(job, result);
//     });
// } else {
pingQueue.process((job, jobDone) => pingServers_1.default(job, jobDone));
pingQueue.on('completed', function (job, result) {
    console.log(job, result);
});
