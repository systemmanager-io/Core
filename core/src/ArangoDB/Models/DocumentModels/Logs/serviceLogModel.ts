import documentModel from "../../../../Lib/Arango/documentModel";
import {arangodb} from "../../../../connectors";

class ServiceLogModel extends documentModel {

    collection = arangodb.collection("serviceLogs");

    filterFields = {
        '_id': ['doc._id', '=='],
        '_key': ['doc._key', '=='],
    };

}

export default new ServiceLogModel();