import edgeModel from "../../../../Lib/Arango/Models/edgeModel";
import {arangodb} from "../../../../connectors";

interface edgeFields extends ArangoEdgeDocument {

}

class UserHasRole extends edgeModel<edgeFields> {

    collection = arangodb.collection('userHasRoles')
}

export default new UserHasRole();
