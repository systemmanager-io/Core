import documentModel from "../../../Lib/Arango/Models/documentModel";
import {arangodb} from "../../../connectors";
import errorName from "../../../Lib/Errors/GraphQL/Errors";

interface documentFields extends ArangoDocument {
    value: any,
}

class SettingModel extends documentModel<documentFields> {

    collection = arangodb.collection("settings");

    filterFields = {
        '_id': ['doc._id', '=='],
        '_key': ['doc._key', '=='],
    };

    async getSetting(setting: string) {
        const result = await this.find(setting);

        if(result ===  null || result === undefined) throw new Error(errorName.ARANGODBERROR);
        return result.value;
    }

    async setSetting(setting: string, value: any) {
        const result = await this.update(setting, {
            value: value
        });

        if(result ===  null || result === undefined) throw new Error(errorName.ARANGODBERROR);
        return result.value;
    }


}

export default new SettingModel();
