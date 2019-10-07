import pingServers from "./Jobs/pingServers";

let Queue = require('bull');
let cluster = require('cluster');
console.log("Bootin")

const numWorkers = 1;
let pingQueue = new Queue("pingQueue", {redis: {port: 6379, host: '127.0.0.1'}});
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
pingQueue.process((job: any, jobDone: any) => pingServers(job, jobDone));
pingQueue.on('completed', function (job: any, result: any) {
    console.log(job, result);
});