import documentModel from "../../../Lib/Arango/Models/documentModel";
import {arangodb} from "../../../connectors";

interface documentFields extends ArangoDocument {

}

class ServerModel extends documentModel<documentFields> {

    collection = arangodb.collection("serverInfos");

    filterFields = {
        '_id': ['doc._id', '=='],
        '_key': ['doc._key', '=='],
    };


}

export default new ServerModel();
