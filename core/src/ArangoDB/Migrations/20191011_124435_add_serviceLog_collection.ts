import {arangodb} from "../../connectors";

const serviceLogCollection = arangodb.collection('serviceLogs');



export async function up() {
    await serviceLogCollection.create();
}

export async function down() {
    await serviceLogCollection.dropx();
}
