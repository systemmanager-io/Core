import edgeModel from "../../../../Lib/Arango/edgeModel";
import {arangodb} from "../../../../connectors";

class RoleHasPermission extends edgeModel {

    collection = arangodb.collection('roleHasPermissions')
}

export default new RoleHasPermission();