"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = require("../../Lib/debug");
const logo_1 = __importDefault(require("../../Assets/logo"));
// This is an nasty hack to get stuff working
debug_1.coreDebug.enabled = true;
debug_1.coreDebug(logo_1.default);
debug_1.coreDebug("+----------------------------------------------------+");
debug_1.coreDebug("|                                                    |");
debug_1.coreDebug("|          SystemManager Monitoring Software         |");
debug_1.coreDebug("|              https://systemmanager.io              |");
debug_1.coreDebug("|       Copyright© 2018 - 2019 Tigo Middelkoop       |");
debug_1.coreDebug("|                                                    |");
debug_1.coreDebug("|         Thank you for using SystemManager!         |");
debug_1.coreDebug("|                     Version 0.0.1                  |");
debug_1.coreDebug("|                                                    |");
debug_1.coreDebug("+----------------------------------------------------+");
debug_1.coreDebug("SystemManager Core Booting up");
