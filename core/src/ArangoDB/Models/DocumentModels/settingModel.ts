import documentModel from "../../../Lib/Arango/documentModel";
import {arangodb} from "../../../connectors";

class SettingModel extends documentModel {

    collection = arangodb.collection("settings");

    filterFields = {
        '_id': ['doc._id', '=='],
        '_key': ['doc._key', '=='],
    };

}

export default new SettingModel();