import * as dotenv from 'dotenv'
const env = dotenv.config();
import {configDebug} from "./Lib/debug";

configDebug("Loading Config");

export const redis = {
    host: process.env.REDIS_HOST || '',
    port: parseInt(process.env.REDIS_PORT || '6379'),
    // password: process.env.REDIS_PASSWORD || null
};

configDebug("Config Loaded");