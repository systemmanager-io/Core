import baseModel from "../../../../Lib/Arango/baseModel";
import {arangodb} from "../../../../connectors";

class UserLogModel extends baseModel {

    collection = arangodb.collection("userLogs");

    filterFields = {
        '_id': ['doc._id', '=='],
        '_key': ['doc._key', '=='],
    };

}

export default new UserLogModel();