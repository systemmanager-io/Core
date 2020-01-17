import {arangodb} from "../../connectors";
import settingModel from "../Models/DocumentModels/settingModel";

export async function up() {
    await settingModel.insert({_key: "1", setting: "FIRST_SETUP", value: false});
}

export async function down() {
    await settingModel.remove("1");
}
