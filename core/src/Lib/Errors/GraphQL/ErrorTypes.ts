const errorType: any = {
    NOTFOUND: {
        message: `Document has not been found in the database.`,
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
        message: `User already exists.`
    },

    NOPERMISSION: {
        message: `You do not have permission to execute this action.`,
        statusCode: 403
    },

    FAILEDTOSENDCOMMAND: {
        message: `Failed to send the command to the server, it might not respond or the daemon is not running`,
        code: 502
    }
};
export default errorType;