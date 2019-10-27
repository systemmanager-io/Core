import documentModel from "../../../Lib/Arango/documentModel";
import {arangodb} from "../../../connectors";

class UserModel extends documentModel {

    collection = arangodb.collection("users");

    filterFields = {
        '_id': ['doc._id', '=='],
        '_key': ['doc._key', '=='],
    };

}

export default new UserModel();