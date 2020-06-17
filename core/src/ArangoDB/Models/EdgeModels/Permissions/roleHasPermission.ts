import edgeModel from "../../../../Lib/Arango/Models/edgeModel";
import {arangodb} from "../../../../connectors";

interface edgeFields extends ArangoEdgeDocument {

}

class RoleHasPermission extends edgeModel<edgeFields> {

    collection = arangodb.collection('roleHasPermissions')
}

export default new RoleHasPermission();
