import baseModel from "../../../../Lib/Arango/baseModel";
import {arangodb} from "../../../../connectors";

class PermissionModel extends baseModel {

    collection = arangodb.collection("permissions");

    filterFields = {
        '_id': ['doc._id', '=='],
        '_key': ['doc._key', '=='],
    };

}

export default new PermissionModel();