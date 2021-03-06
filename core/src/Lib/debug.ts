import debug from "debug";

const appDebug = debug('systemmanager');
export const coreDebug = appDebug.extend('core');
export const updateDebug = appDebug.extend('updater');
export const dbDebug = coreDebug.extend('database');
export const workerDebug = coreDebug.extend('worker');
export const configDebug = coreDebug.extend('config');
export const pluginDebug = coreDebug.extend('plugin');
export const httpDebug = coreDebug.extend('http');
export const httpMiddlewareDebug = httpDebug.extend("middleware");
export const queueDebug = coreDebug.extend('queue');
export const graphqlDebug = coreDebug.extend('graphql');
export const installDebug = coreDebug.extend('install');

