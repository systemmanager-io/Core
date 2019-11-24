import "./Lib/debug"
import pingServers from "./Jobs/pingServers";

let Queue = require('bull');
let cluster = require('cluster');


const numWorkers = 8;
const pingQueue = new Queue('pingServer', 'redis://127.0.0.1:6379');
if (cluster.isMaster) {
    console.log("Bootin");
    for (let i = 0; i < numWorkers; i++) {
        cluster.fork();
        console.log("Adding worker")
    }

    cluster.on('exit', function (worker: any, code: any, signal: any) {
        console.log('worker ' + worker.process.pid + ' died');
    });
    pingQueue.on('completed', function (job: any, result: any) {
        console.log(job, result);
    });

} else {

    pingQueue.process((job: any, jobDone: any) => pingServers(job, jobDone));
    pingQueue.on('completed', function (job: any, result: any) {
        console.log(job, result);
    });

}
