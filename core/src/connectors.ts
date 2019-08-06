import express from "express";
import * as http from "http";
import * as config from "./config";
import IORedis from "ioredis";
import * as Arango from "arangojs";

export const redis = new IORedis(config.redis);

export const app = express();
export const router = express.Router();

export const arangodb = new Arango.Database(config.arangodb.url);
arangodb.useBasicAuth(config.arangodb.username, config.arangodb.password);
arangodb.useDatabase(config.arangodb.database);

export const httpServer = http.createServer(app);