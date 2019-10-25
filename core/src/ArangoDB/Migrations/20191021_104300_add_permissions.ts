import {arangodb} from "../../connectors";
import permissionModel from "../Models/DocumentModels/Permissions/permissionModel";

const serviceLogCollection = arangodb.collection('serviceLogs');



export async function up() {
    await permissionModel.insert({
        _id: 1,

    })
}

export async function down() {
    await serviceLogCollection.drop();
}
