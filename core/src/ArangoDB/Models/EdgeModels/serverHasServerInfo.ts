import edgeModel from "../../../Lib/Arango/Models/edgeModel";
import {arangodb} from "../../../connectors";

interface edgeFields extends ArangoEdgeDocument {

}

class ServerHasServerInfo extends edgeModel<edgeFields> {

    collection = arangodb.collection('serverHasServerInfos');
}

export default new ServerHasServerInfo();
