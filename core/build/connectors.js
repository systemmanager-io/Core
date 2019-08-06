"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http = __importStar(require("http"));
const config = __importStar(require("./config"));
const ioredis_1 = __importDefault(require("ioredis"));
exports.redis = new ioredis_1.default(config.redis);
exports.app = express_1.default();
exports.router = express_1.default.Router();
exports.httpServer = http.createServer(exports.app);
