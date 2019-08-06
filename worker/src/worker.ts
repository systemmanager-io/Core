import pingServers from "./Jobs/pingServers";

let Queue = require('bull');
let cluster = require('cluster');

const numWorkers = 1;
let pingQueue = new Queue("pingQueue");

if (cluster.isMaster) {
    for (let i = 0; i < numWorkers; i++) {
        cluster.fork();
        console.log("Adding worker")
    }

    cluster.on('exit', function (worker, code, signal) {
        console.log('worker ' + worker.process.pid + ' died');
    });

} else {
    pingQueue.process((job, jobDone) => pingServers(job, jobDone));
}