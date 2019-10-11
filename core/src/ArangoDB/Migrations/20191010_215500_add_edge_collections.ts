import {arangodb} from "../../connectors";

const roleHasPermissionsEdgeCollection = arangodb.edgeCollection('roleHasPermissions');
const userHasPermissionsEdgeCollection = arangodb.edgeCollection('userHasPermissions');
const userHasRolesEdgeCollection = arangodb.edgeCollection('userHasRoles');



export async function up() {
    await roleHasPermissionsEdgeCollection.create();
    await userHasPermissionsEdgeCollection.create();
    await userHasRolesEdgeCollection.create();
}

export async function down() {
    await roleHasPermissionsEdgeCollection.drop();
    await userHasPermissionsEdgeCollection.drop();
    await userHasRolesEdgeCollection.drop();
}
