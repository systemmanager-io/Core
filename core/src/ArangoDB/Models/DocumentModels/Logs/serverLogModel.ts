import documentModel from "../../../../Lib/Arango/documentModel";
import {arangodb} from "../../../../connectors";

class ServerLogModel extends documentModel {

    collection = arangodb.collection("serverLogs");

    filterFields = {
        '_id': ['doc._id', '=='],
        '_key': ['doc._key', '=='],
    };

}

export default new ServerLogModel();