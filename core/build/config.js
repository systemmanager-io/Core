"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
const env = dotenv.config();
const debug_1 = require("./Lib/debug");
debug_1.configDebug("Loading Config");
exports.http = {
    host: process.env.HTTP_HOST || '',
    port: parseInt(process.env.HTTP_PORT || '8080')
};
exports.mysql = {
    dialect: 'mysql',
    host: process.env.MYSQL_HOST || '',
    username: process.env.MYSQL_USERNAME || '',
    password: process.env.MYSQL_PASSWORD || '',
    database: process.env.MYSQL_DATABASE || '',
};
exports.redis = {
    host: process.env.REDIS_HOST || '',
    port: parseInt(process.env.REDIS_PORT || '6379'),
};
debug_1.configDebug("Config Loaded");
