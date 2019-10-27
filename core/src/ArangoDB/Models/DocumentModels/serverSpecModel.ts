import documentModel from "../../../Lib/Arango/documentModel";
import {arangodb} from "../../../connectors";

class ServerSpecModel extends documentModel {

    collection = arangodb.collection("serverSpecs");

    filterFields = {
        '_id': ['doc._id', '=='],
        '_key': ['doc._key', '=='],
    };

}

export default new ServerSpecModel();