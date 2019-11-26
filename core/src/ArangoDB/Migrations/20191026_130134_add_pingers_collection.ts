import {arangodb} from "../../connectors";

const pingerCollection = arangodb.collection('pinger');

export async function up() {
    await pingerCollection.create();
}

export async function down() {
    await pingerCollection.drop();
}
