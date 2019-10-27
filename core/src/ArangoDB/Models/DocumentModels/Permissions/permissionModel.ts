import documentModel from "../../../../Lib/Arango/documentModel";
import {arangodb} from "../../../../connectors";

interface databaseFields {
    permission: string
}

class PermissionModel extends documentModel {

    collection = arangodb.collection("permissions");

    filterFields = {
        '_id': ['doc._id', '=='],
        '_key': ['doc._key', '=='],
    };


}




export default new PermissionModel();