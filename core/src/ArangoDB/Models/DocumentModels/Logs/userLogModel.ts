import documentModel from "../../../../Lib/Arango/Models/documentModel";
import {arangodb} from "../../../../connectors";


interface documentFields extends ArangoDocument {
    // userId
    user: string,
    type: UserLogType,
    message: string,
}

class UserLogModel extends documentModel<documentFields> {

    collection = arangodb.collection("userLogs");

    filterFields = {
        '_id': ['doc._id', '=='],
        '_key': ['doc._key', '=='],
    };

}

export default new UserLogModel();
