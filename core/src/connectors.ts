import express from "express";
import * as http from "http";
import * as config from "./config";
import IORedis from "ioredis";
import * as ArangoJS from "arangojs";
// import jwtMiddleware from "./Http/Middlewares/jwtMiddleware";
// import UserLoginController from "./Http/Controllers/UserLoginController";

export const redis = new IORedis(config.redis);

export const app = express();
export const router = express.Router();

app.use(express.json());

// This feels so not naturally, to import it like this.
import "./Http/Routes/UserAuthRoutes"

export const arangodb: any = new ArangoJS.Database(config.arangodb.host);
arangodb.useBasicAuth(config.arangodb.username, config.arangodb.password);
arangodb.useDatabase(config.arangodb.database);

export const httpServer: http.Server = http.createServer(app);