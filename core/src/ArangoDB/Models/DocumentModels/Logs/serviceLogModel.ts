import documentModel from "../../../../Lib/Arango/Models/documentModel";
import {arangodb} from "../../../../connectors";

interface DocumentFields extends ArangoDocument {
    type: ServerLogType,
    message: string,
}

class ServiceLogModel extends documentModel<DocumentFields> {

    collection = arangodb.collection("serviceLogs");

    filterFields = {
        '_id': ['doc._id', '=='],
        '_key': ['doc._key', '=='],
    };

}

export default new ServiceLogModel();
