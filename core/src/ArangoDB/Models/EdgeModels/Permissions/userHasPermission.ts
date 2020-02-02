import edgeModel from "../../../../Lib/Arango/edgeModel";
import {arangodb} from "../../../../connectors";

interface edgeFields extends ArangoEdgeDocument {
    
}

class UserHasPermission extends edgeModel<edgeFields> {

    collection = arangodb.collection('userHasPermissions')
}

export default new UserHasPermission();