import documentModel from "../../../../Lib/Arango/documentModel";
import {arangodb} from "../../../../connectors";

class RoleModel extends documentModel {

    collection = arangodb.collection("roles");

    filterFields = {
        '_id': ['doc._id', '=='],
        '_key': ['doc._key', '=='],
    };


}

export default new RoleModel();