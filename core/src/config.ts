import * as dotenv from 'dotenv'
const env = dotenv.config();
import {configDebug} from "./Lib/debug";
import setArangoHost from "./Functions/setArangoHost";

configDebug("Loading Config");

export const graphql = {
    path: process.env.GRAPHQL_PATH || "/",
};

export const http = {
    host: process.env.HTTP_HOST || '0.0.0.0',
    port: parseInt(process.env.HTTP_PORT || '8080')
};

export const arangodb = {
    host: setArangoHost(process.env.ARANGODB_HOST || ''),
    username: process.env.ARANGODB_USERNAME || '',
    password: process.env.ARANGODB_PASSWORD || '',
    database: process.env.ARANGODB_DATABASE || 'systemmanager',
};

export const redis = {
    host: process.env.REDIS_HOST || '',
    port: parseInt(process.env.REDIS_PORT || '6379'),
    // password: process.env.REDIS_PASSWORD || null
};

export const jwt = {
    key: process.env.JWT_KEY || '',
    secret: process.env.JWT_SECRET || '',
};

configDebug("Config Loaded");