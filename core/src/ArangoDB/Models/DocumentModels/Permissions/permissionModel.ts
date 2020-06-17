import documentModel from "../../../../Lib/Arango/Models/documentModel";
import {arangodb} from "../../../../connectors";

interface documentFields extends ArangoDocument {
    permission: string,
}

class PermissionModel extends documentModel<documentFields> {

    collection = arangodb.collection("permissions");

    filterFields = {
        '_id': ['doc._id', '=='],
        '_key': ['doc._key', '=='],
    };


}




export default new PermissionModel();
