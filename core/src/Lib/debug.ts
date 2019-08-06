import debug = require("debug");

const appDebug = debug('systemmanager');
export const coreDebug = appDebug.extend('core');
export const dbDebug = coreDebug.extend('database');
export const configDebug = coreDebug.extend('config');
export const pluginDebug = coreDebug.extend('plugin');
export const httpDebug = coreDebug.extend('http');
export const queueDebug = coreDebug.extend('queue');
export const graphqlDebug = coreDebug.extend('graphql');