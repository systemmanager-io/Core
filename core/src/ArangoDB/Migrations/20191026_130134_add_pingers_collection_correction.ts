import {arangodb} from "../../connectors";

const pingerCollection = arangodb.collection('pinger');

export async function up() {
    await pingerCollection.rename("pingers");
}

export async function down() {
    await pingerCollection.rename("pinger");
}
