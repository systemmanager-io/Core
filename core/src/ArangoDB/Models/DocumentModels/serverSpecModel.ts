import documentModel from "../../../Lib/Arango/documentModel";
import {arangodb} from "../../../connectors";

interface documentFields extends ArangoDocument {

}

class ServerSpecModel extends documentModel<documentFields> {

    collection = arangodb.collection("serverSpecs");

    filterFields = {
        '_id': ['doc._id', '=='],
        '_key': ['doc._key', '=='],
    };

}

export default new ServerSpecModel();