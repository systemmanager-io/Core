import { GraphQLEnumType } from 'graphql';

const serverLogType = new GraphQLEnumType({
    name: 'LogType',
    values: {
        INFO: {
            value: "info",
            description: "The server has some info about a configured item"
        },
        WARNING: {
            value: "warning",
            description: "The server has warnings that will need to be addressed"
        },
        ERROR: {
            value: "error",
            description: "The server has suffered an error and will require attention"
        },
        CRITICAL: {
            value: "critcal",
            description: "The server has suffered an critical error. Certain applications that suffer this will probably stop working."
        },
        DOWN: {
            value: "down",
            description: "The server is down"
        }

    }
});

export default serverLogType;