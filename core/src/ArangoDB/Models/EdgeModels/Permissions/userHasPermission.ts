import edgeModel from "../../../../Lib/Arango/edgeModel";
import {arangodb} from "../../../../connectors";

class UserHasPermission extends edgeModel {

    collection = arangodb.collection('userHasPermissions')
}

export default new UserHasPermission();