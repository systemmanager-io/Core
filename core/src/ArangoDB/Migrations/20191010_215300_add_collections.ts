import {arangodb} from "../../connectors";

const serverCollection = arangodb.collection("servers");
const serverLogCollection = arangodb.collection("serverLogs");


export async function up() {

await serverCollection.create();
await serverLogCollection.create();

}

export async function down() {

    await serverCollection.drop();
    await serverLogCollection.drop();

}
