"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connectors_1 = require("../../connectors");
const debug_1 = require("../../Lib/debug");
const config = __importStar(require("../../config"));
const graphql_1 = __importDefault(require("./graphql"));
async function bootCore() {
    connectors_1.httpServer.listen(config.http.port, config.http.host);
    await graphql_1.default();
}
bootCore().then(() => {
    debug_1.httpDebug(`🚀 Server ready at http://localhost:${config.http.port}`);
    debug_1.httpDebug(`🚀 Subscriptions ready at ws://localhost:${config.http.port}`);
});
