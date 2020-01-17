import documentModel from "../../../Lib/Arango/documentModel";
import {arangodb} from "../../../connectors";
import Joi from "@hapi/joi";

class SettingModel extends documentModel {

    collection = arangodb.collection("settings");

    filterFields = {
        '_id': ['doc._id', '=='],
        '_key': ['doc._key', '=='],
    };

    modelFields = Joi.object({});

    async getSetting(setting: string) {
        const result = await this.find(setting);
        return result.value;
    }

    async setSetting(setting: string, value: any) {
        const result = await this.update(setting, {
            value: value
        });
        return result.value;
    }


}

export default new SettingModel();