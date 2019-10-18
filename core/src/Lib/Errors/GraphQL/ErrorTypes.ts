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
        message: `Passwords do not match`,
    },
    USERALREADYEXISTS: {
        message: `User already exists`
    }
}
export default errorType;