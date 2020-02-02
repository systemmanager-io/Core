import documentModel from "../../../Lib/Arango/documentModel";
import {arangodb} from "../../../connectors";

interface documentFields extends ArangoDocument {
    name: string,
    ip: string,
    description: string,
    portableMode: boolean,
    port: number,
}

class ServerModel extends documentModel<documentFields> {

    collection = arangodb.collection("servers");

    filterFields = {
        '_id': ['doc._id', '=='],
        '_key': ['doc._key', '=='],
    };
}

export default new ServerModel();