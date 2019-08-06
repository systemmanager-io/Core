"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./showCoreInfo");
require("./../../config");
// import "./migrations"
require("./queues");
// Load the plugins after everything has run!
require("./loadPlugins");
