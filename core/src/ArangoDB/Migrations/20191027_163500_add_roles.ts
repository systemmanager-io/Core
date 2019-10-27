import {arangodb} from "../../connectors";
import roleModel from "../Models/DocumentModels/Permissions/roleModel";




export async function up() {
    await roleModel.insert({_key: "1", role: "Administrator"});
    await roleModel.insert({_key: "2", role: "SysOp"});
    await roleModel.insert({_key: "3", role: "Developer"});
}

export async function down() {
    await roleModel.remove("1");
    await roleModel.remove("2");
    await roleModel.remove("3");
}
