import {arangodb} from "../../connectors";

const serverHasServerInfoEdgeCollection = arangodb.edgeCollection('serverHasServerInfos');
const serverHasServerInfoCollection = arangodb.collection('serverHasServerInfos');

export async function up() {
    await serverHasServerInfoCollection.drop();
    await serverHasServerInfoEdgeCollection.create();

}

export async function down() {
    await serverHasServerInfoEdgeCollection.drop();
    await serverHasServerInfoCollection.create();


}
