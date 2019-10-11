import {arangodb} from "../../connectors";

const serverCollection = arangodb.collection("servers");
const serverLogCollection = arangodb.collection("serverLogs");
const serverSpecCollection = arangodb.collection("serverSpecs");

const settingCollection = arangodb.collection("settings");

const userCollection = arangodb.collection('users');
const userLogCollection = arangodb.collection("userLogs");

const roleCollection = arangodb.collection("roles");
const permissionCollection = arangodb.collection("permissions");

export async function up() {

await serverCollection.create();
await serverLogCollection.create();
await serverSpecCollection.create();

await settingCollection.create();

await userCollection.create();
await userLogCollection.create();

await roleCollection.create();
await permissionCollection.create();
}

export async function down() {

    await serverCollection.drop();
    await serverLogCollection.drop();
    await serverSpecCollection.drop();

    await settingCollection.drop();

    await userCollection.drop();
    await userLogCollection.drop();

    await roleCollection.drop();
    await permissionCollection.drop();

}
