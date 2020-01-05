import documentModel from "../../../Lib/Arango/documentModel";
import {arangodb} from "../../../connectors";

class UserModel extends documentModel {

    collection = arangodb.collection("users");

    filterFields = {
        '_id': ['doc._id', '=='],
        '_key': ['doc._key', '=='],
    };

    modelFields = {
        name: String,
        username: String,
        email: String,
        authMethod: String,
        password: String,
        salt: String,
        blocked: Boolean,
        updatedAt: String,
        createdAt: String,
    };

}

export default new UserModel();