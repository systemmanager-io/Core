const errorType: any = {
    NOTFOUND: {
        message: `Document has not been found in the database`,
        statusCode: 404
    },
    INTERNALERROR: {
        message: `Internal Server Error`,
        statusCode: 500
    },


    NOPASSWORDMATCH: {
        message: `Passwords no not match`,
    }
}
export default errorType;