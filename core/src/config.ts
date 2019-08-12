import * as dotenv from 'dotenv'

const env = dotenv.config();

import {configDebug} from "./Lib/debug";

configDebug("Loading Config");

export const graphql = {
    path: "/admin"
};

export const http = {
    host: process.env.HTTP_HOST || '',
    port: parseInt(process.env.HTTP_PORT || '8080')
};

export const arangodb = {
    host: process.env.ARANGODB_HOST || '',
    username: process.env.ARANGODB_USERNAME || '',
    password: process.env.ARANGODB_PASSWORD || '',
    database: process.env.ARANGODB_DATABASE || '',
};

export const redis = {
    host: process.env.REDIS_HOST || '',
    port: parseInt(process.env.REDIS_PORT || '6379'),
    // password: process.env.REDIS_PASSWORD || null
};

configDebug("Config Loaded");