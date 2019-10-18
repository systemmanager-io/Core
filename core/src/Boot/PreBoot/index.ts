//Set the debug to our logger. This can be changed later once the config is being loaded.
// process.env.DEBUG = "systemmanager:*";


import "./../../config"
import "./showCoreInfo"
import  "./migrations"

import "./queues"

// Load the plugins after everything has run!
import "./loadPlugins"