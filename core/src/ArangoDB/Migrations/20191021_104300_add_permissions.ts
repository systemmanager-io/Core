import {arangodb} from "../../connectors";
import permissionModel from "../Models/DocumentModels/Permissions/permissionModel";

export async function up() {
    await permissionModel.insert({_id: "1", permission: "SERVER_CREATE"});
    await permissionModel.insert({_id: "2", permission: "SERVER_EDIT"});
    await permissionModel.insert({_id: "3", permission: "SERVER_VIEW"});
    await permissionModel.insert({_id: "4", permission: "SERVER_DELETE"});

    await permissionModel.insert({_id: "5", permission: "SERVER_CATEGORY_CREATE"});
    await permissionModel.insert({_id: "6", permission: "SERVER_CATEGORY_EDIT"});
    await permissionModel.insert({_id: "7", permission: "SERVER_CATEGORY_VIEW"});
    await permissionModel.insert({_id: "8", permission: "SERVER_CATEGORY_DELETE"});

    await permissionModel.insert({_id: "9", permission: "SERVER_POWERMANAGEMENT_RESTART"});
    await permissionModel.insert({_id: "10", permission: "SERVER_POWERMANAGEMENT_POWEROFF"});

    await permissionModel.insert({_id: "11", permission: "SETTINGS_USER_CREATE"});
    await permissionModel.insert({_id: "12", permission: "SETTINGS_USER_EDIT"});
    await permissionModel.insert({_id: "13", permission: "SETTINGS_USER_VIEW"});
    await permissionModel.insert({_id: "14", permission: "SETTINGS_USER_DELETE"});
    await permissionModel.insert({_id: "15", permission: "SETTINGS_USER_BLOCK"});



}

export async function down() {
    await permissionModel.remove("1");
    await permissionModel.remove("2");
    await permissionModel.remove("3");
    await permissionModel.remove("4");
    await permissionModel.remove("5");
    await permissionModel.remove("6");
    await permissionModel.remove("7");
    await permissionModel.remove("8");
    await permissionModel.remove("9");
    await permissionModel.remove("10");
    await permissionModel.remove("11");
    await permissionModel.remove("12");
    await permissionModel.remove("13");
    await permissionModel.remove("14");
    await permissionModel.remove("15");
}
