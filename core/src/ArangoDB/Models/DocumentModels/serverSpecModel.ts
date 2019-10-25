import baseModel from "../../../Lib/Arango/baseModel";
import {arangodb} from "../../../connectors";

class ServerSpecModel extends baseModel {

    collection = arangodb.collection("serverSpecs");

    filterFields = {
        '_id': ['doc._id', '=='],
        '_key': ['doc._key', '=='],
    };

}

export default new ServerSpecModel();