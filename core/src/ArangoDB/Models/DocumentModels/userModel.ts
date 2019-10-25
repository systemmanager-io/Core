import baseModel from "../../../Lib/Arango/baseModel";
import {arangodb} from "../../../connectors";

class UserModel extends baseModel {

    collection = arangodb.collection("users");

    filterFields = {
        '_id': ['doc._id', '=='],
        '_key': ['doc._key', '=='],
    };

}

export default new UserModel();