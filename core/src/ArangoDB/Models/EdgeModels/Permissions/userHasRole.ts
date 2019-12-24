import edgeModel from "../../../../Lib/Arango/edgeModel";
import {arangodb} from "../../../../connectors";

class UserHasRole extends edgeModel {

    collection = arangodb.collection('userHasRoles')
}

export default new UserHasRole();