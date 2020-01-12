import {arangodb} from "../../connectors";

const serverHasServerInfoCollection = arangodb.collection('serverHasServerInfos');

export async function up() {
    await serverHasServerInfoCollection.create();
}

export async function down() {
    await serverHasServerInfoCollection.drop();
}
