import documentModel from "../../../Lib/Arango/Models/documentModel";
import {arangodb} from "../../../connectors";

interface documentFields extends ArangoDocument {
    name: string,
    username: string,
    email: string,
    authMethod: AuthType,
    password: string,
    salt: string,
    blocked: boolean,
}

class UserModel extends documentModel<documentFields> {

    collection = arangodb.collection("users");

    filterFields = {
        '_id': ['doc._id', '=='],
        '_key': ['doc._key', '=='],
    };

}

export default new UserModel();
