import {arangodb} from "../../connectors";

const serverInfoCollection = arangodb.collection('serverInfo');

export async function up() {
    await serverInfoCollection.rename("serverInfos");
}

export async function down() {
    await serverInfoCollection.rename("serverInfo");
}
