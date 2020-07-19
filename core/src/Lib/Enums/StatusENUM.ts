import { GraphQLEnumType } from 'graphql';

const serverLogType = new GraphQLEnumType({
    name: 'LogType',
    values: {
        INFO: {
            value: "info",
            description: "The server has some info about a watched item"
        },
        WARNING: {
            value: "warning",
            description: "The server has warnings that will need to be addressed or looked at"
        },
        ERROR: {
            value: "error",
            description: "The server has suffered an error and will require attention"
        },
        CRITICAL: {
            value: "critcal",
            description: "The server has suffered an critical error. Most applications that suffer a critical error will probably end up crashing."
        },
        FLAPPING: {
            value: "flapping",
            description: "The server is flicking between offline and offline."
        },
        DOWN: {
            value: "down",
            description: "The server is down"
        }

    }
});

export default serverLogType;