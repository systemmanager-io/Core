import edgeModel from "../../../Lib/Arango/edgeModel";
import {arangodb} from "../../../connectors";

class ServerHasServerInfo extends edgeModel {

    collection = arangodb.collection('serverHasServerInfos');
}

export default new ServerHasServerInfo();