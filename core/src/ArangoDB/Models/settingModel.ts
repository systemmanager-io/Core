import baseModel from "../../Lib/Arango/baseModel";
import {arangodb} from "../../connectors";

class SettingModel extends baseModel {

    collection = arangodb.collection("settings");

    filterFields = {
        '_id': ['doc._id', '=='],
        '_key': ['doc._key', '=='],
    };

}

export default new SettingModel();