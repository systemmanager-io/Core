/// <reference types="node" />
import * as http from "http";
import IORedis from "ioredis";
export declare const redis: IORedis.Redis;
export declare const app: import("express-serve-static-core").Express;
export declare const router: import("express-serve-static-core").Router;
export declare const httpServer: http.Server;
