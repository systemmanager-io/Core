import baseModel from "../../../Lib/Arango/baseModel";
import {arangodb} from "../../../connectors";
import {string} from "joi";

class ServerModel extends baseModel {

    collection = arangodb.collection("servers");

    filterFields = {
        '_id': ['doc._id', '=='],
        '_key': ['doc._key', '=='],
    };

    modelFields = {
        'permission': string
    };

}

export default new ServerModel();