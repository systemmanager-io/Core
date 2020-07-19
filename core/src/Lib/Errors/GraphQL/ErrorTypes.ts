export const errorType: any = {
    NOTFOUND: {
        message: `Document does not exist in the database`,
        statusCode: 404
    },
    INTERNALERROR: {
        message: `Internal Server Error.`,
        statusCode: 500
    },

    NOPASSWORDMATCH: {
        message: `Passwords do not match.`,
    },
    USERALREADYEXISTS: {
        message: `User already exists.`,
        statusCode: 502
    },

    NOPERMISSION: {
        message: `You do not have permission to execute this action.`,
        statusCode: 403
    },

    FAILEDTOSENDCOMMAND: {
        message: `Failed to send the command to the server, it might not respond or the daemon is not running`,
        code: 502
    },

    ARANGODBERROR: {
        message: `ArangoDB Failed to Insert/Update/Delete`,
        statusCode: 502
    },

};

export declare enum errorName {
    NOTFOUND = "NOTFOUND",
    INTERNALERROR = "INTERNALERROR",

    NOPASSWORDMATCH = "NOPASSWORDMATCH",
    USERALREADYEXISTS = "USERALREADYEXISTS",

    NOPERMISSION = "NOPERMISSION",

    FAILEDTOSENDCOMMAND = "FAILEDTOSENDCOMMAND",

    ARANGODBERROR = "ARANGODBERROR"
};
