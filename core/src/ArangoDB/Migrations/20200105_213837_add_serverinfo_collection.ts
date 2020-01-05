import {arangodb} from "../../connectors";

const serverInfoCollection = arangodb.collection('serverInfo');

export async function up() {
    await serverInfoCollection.create();
}

export async function down() {
    await serverInfoCollection.drop();
}
