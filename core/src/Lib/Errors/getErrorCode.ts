import errorType from "./GraphQL/ErrorTypes";

const getErrorCode = (errorName: any) => {
    return errorType[errorName];
};

export default getErrorCode;