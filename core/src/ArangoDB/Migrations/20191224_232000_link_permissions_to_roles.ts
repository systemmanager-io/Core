import {arangodb} from "../../connectors";
import roleHasPermission from "../Models/EdgeModels/Permissions/roleHasPermission";

export async function up() {
    await roleHasPermission.createRelation({_from: "roles/1", _to: "permissions/1"});
    await roleHasPermission.createRelation({_from: "roles/1", _to: "permissions/2"});
    await roleHasPermission.createRelation({_from: "roles/1", _to: "permissions/3"});
    await roleHasPermission.createRelation({_from: "roles/1", _to: "permissions/4"});
    await roleHasPermission.createRelation({_from: "roles/1", _to: "permissions/5"});
    await roleHasPermission.createRelation({_from: "roles/1", _to: "permissions/6"});
    await roleHasPermission.createRelation({_from: "roles/1", _to: "permissions/7"});
    await roleHasPermission.createRelation({_from: "roles/1", _to: "permissions/8"});
    await roleHasPermission.createRelation({_from: "roles/1", _to: "permissions/9"});
    await roleHasPermission.createRelation({_from: "roles/1", _to: "permissions/10"});
    await roleHasPermission.createRelation({_from: "roles/1", _to: "permissions/11"});
    await roleHasPermission.createRelation({_from: "roles/1", _to: "permissions/12"});
    await roleHasPermission.createRelation({_from: "roles/1", _to: "permissions/13"});
    await roleHasPermission.createRelation({_from: "roles/1", _to: "permissions/14"});
    await roleHasPermission.createRelation({_from: "roles/1", _to: "permissions/15"});
}

export async function down() {}
