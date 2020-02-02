import documentModel from "../../../../Lib/Arango/documentModel";
import {arangodb} from "../../../../connectors";

interface documentFields extends ArangoDocument {
    role: string,
}
class RoleModel extends documentModel<documentFields> {

    collection = arangodb.collection("roles");

    filterFields = {
        '_id': ['doc._id', '=='],
        '_key': ['doc._key', '=='],
    };


}

export default new RoleModel();