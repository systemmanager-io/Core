import baseModel from "./baseModel";
import {arangodb} from "../../connectors";

class ServerModel extends baseModel {

    collection = arangodb.collection("servers");

    filterFields = {
        '_id': ['doc._id', '=='],
        '_key': ['doc._key', '=='],
    };

}

export default new ServerModel();