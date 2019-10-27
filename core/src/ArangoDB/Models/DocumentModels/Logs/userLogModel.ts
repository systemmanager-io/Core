import documentModel from "../../../../Lib/Arango/documentModel";
import {arangodb} from "../../../../connectors";

class UserLogModel extends documentModel {

    collection = arangodb.collection("userLogs");

    filterFields = {
        '_id': ['doc._id', '=='],
        '_key': ['doc._key', '=='],
    };

}

export default new UserLogModel();