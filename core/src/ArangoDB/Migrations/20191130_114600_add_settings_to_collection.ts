import settingModel from "../Models/DocumentModels/settingModel";

export async function up() {
    await settingModel.insert({_key: "FIRST_SETUP", value: false});
    await settingModel.insert({_key: "NAME",  value: ""});
}

export async function down() {
    await settingModel.remove("FIRST_TIME");
    await settingModel.remove("NAME");
}
