import settingModel from "../Models/DocumentModels/settingModel";

export async function up() {
    await settingModel.remove("1");
    await settingModel.insert({_key: "FIRST_SETUP", value: false});
    await settingModel.insert({_key: "NAME",  value: ""});
}

export async function down() {
    await settingModel.insert({_key: "1", setting: "FIRST_SETUP", value: "false"});
    await settingModel.remove("FIRST_TIME");
    await settingModel.remove("NAME");
}
