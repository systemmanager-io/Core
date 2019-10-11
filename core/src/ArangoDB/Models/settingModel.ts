import baseModel from "../../Lib/Arango/baseModel";
import {arangodb} from "../../connectors";

class ServerModel extends baseModel {

    collection = arangodb.collection("serverLogs");

    filterFields = {
        '_id': ['doc._id', '=='],
        '_key': ['doc._key', '=='],
    };

}

export default new ServerModel();