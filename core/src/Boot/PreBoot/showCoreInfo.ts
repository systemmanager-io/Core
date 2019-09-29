//Set the debug to our logger. This can be changed later once the config is being loaded.
process.env.DEBUG = "systemmanager:*";

import {coreDebug, updateDebug} from "../../Lib/debug";
import logo from "../../Assets/logo"

coreDebug(logo);
coreDebug("+----------------------------------------------------+");
coreDebug("|                                                    |");
coreDebug("|          SystemManager Monitoring Software         |");
coreDebug("|              https://systemmanager.io              |");
coreDebug("|       Copyright © 2018 - 2019 Tigo Middelkoop      |");
coreDebug("|                                                    |");
coreDebug("|         Thank you for using SystemManager!         |");
coreDebug("|                     Version 0.0.1                  |");
coreDebug("|                                                    |");
coreDebug("+----------------------------------------------------+");
coreDebug("SystemManager Core Booting up");

// updateDebug("There is an update available!");