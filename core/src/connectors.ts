import express from "express";
import * as http from "http";
import * as config from "./config";
import IORedis from "ioredis";
const Sequelize = require('sequelize');

export const redis = new IORedis(config.redis);

export const app = express();
export const mysql = new Sequelize(config.mysql.database, config.mysql.username, config.mysql.password);

export const httpServer = http.createServer(app);