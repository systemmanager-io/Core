import baseModel from "../../../../Lib/Arango/baseModel";
import {arangodb} from "../../../../connectors";

class RoleModel extends baseModel {

    collection = arangodb.collection("roles");

    filterFields = {
        '_id': ['doc._id', '=='],
        '_key': ['doc._key', '=='],
    };


}

export default new RoleModel();