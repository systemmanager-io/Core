import baseModel from "../../../../Lib/Arango/baseModel";
import {arangodb} from "../../../../connectors";

class ServiceLogModel extends baseModel {

    collection = arangodb.collection("serviceLogs");

    filterFields = {
        '_id': ['doc._id', '=='],
        '_key': ['doc._key', '=='],
    };

}

export default new ServiceLogModel();