import express from "express";
import * as http from "http";
import * as config from "./config";
import IORedis from "ioredis";
import * as Arango from "arangojs";
import jwtMiddleware from "./Http/Middlewares/jwtMiddleware";

export const redis = new IORedis(config.redis);

export const app = express();
export const router = express.Router();

app.use(function(req, res, next) {jwtMiddleware(req, res, next)});

export const arangodb: any = new Arango.Database(config.arangodb.host);
arangodb.useBasicAuth(config.arangodb.username, config.arangodb.password);
arangodb.useDatabase(config.arangodb.database);

export const httpServer = http.createServer(app);