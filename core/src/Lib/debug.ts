import debug = require("debug");

const appDebug = debug('systemmanager');
export const coreDebug = appDebug.extend('core');
export const dbDebug = coreDebug.extend('database');
export const configDebug = coreDebug.extend('config');
export const pluginDebug = coreDebug.extend('plugin');
export const httpDebug = coreDebug.extend('http');
export const queueDebug = coreDebug.extend('queue');
export const graphqlDebug = coreDebug.extend('graphql');

// This is an nasty hack to get stuff working
coreDebug.enabled = true;
dbDebug.enabled = true;
configDebug.enabled = true;
pluginDebug.enabled = true;
httpDebug.enabled = true;
queueDebug.enabled = true;
graphqlDebug.enabled = true;