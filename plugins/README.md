# This directory will store some plugins for SystemManager
These will come included but are not required for the functionality of the core.

These plugins I wanted to have for the system. e.g. a plugin which will simulate a world where servers are cities and towns. (Thanks JustBetter, A company in The Netherlands, for this amazing idea! Full credits go to them!)
These are plugins to power 3rd party frontends who need more info than the API can provide. You can use the event system built into systemmanager to catch these events and run your own code for them!

##### Plugin setting/loading techniques

- Search for plugins when users asks to do so in the core and returns a list with found plugins
- User can add them with a GraphQL query which will load the config into a plugin collection where the settings also will be stored.

A migration will be build with sample data to keep myself on track when building that system. 