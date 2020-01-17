import documentModel from "../../../Lib/Arango/documentModel";
import {arangodb} from "../../../connectors";
import Joi, {string, boolean} from "@hapi/joi"

class UserModel extends documentModel {

    collection = arangodb.collection("users");

    filterFields = {
        '_id': ['doc._id', '=='],
        '_key': ['doc._key', '=='],
    };

    modelFields =  Joi.object({
        _key: string(),
        name: string(),
        username: string(),
        email: string(),
        authMethod: string(),
        password: string(),
        salt: string(),
        blocked: boolean(),
        updatedAt: string(),
        createdAt: string(),
    });

}

export default new UserModel();