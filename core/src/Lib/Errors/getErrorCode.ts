import {errorType, errorName} from "./GraphQL/ErrorTypes";

const getErrorCode = (errorName: errorName | string) => {
    return errorType[errorName];
};

export default getErrorCode;