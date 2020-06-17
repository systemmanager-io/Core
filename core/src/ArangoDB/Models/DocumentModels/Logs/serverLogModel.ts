import documentModel from "../../../../Lib/Arango/Models/documentModel";
import {arangodb} from "../../../../connectors";

interface documentFields extends ArangoDocument {
    server: string,
    type: ServerLogType,
    message: string,
}

class ServerLogModel extends documentModel<documentFields> {

    collection = arangodb.collection("serverLogs");

    filterFields = {
        '_id': ['doc._id', '=='],
        '_key': ['doc._key', '=='],
    };

}

export default new ServerLogModel();
