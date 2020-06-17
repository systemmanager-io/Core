import {arangodb} from "../../../connectors";

export default async function () {
    const migrationCollection = arangodb.collection("migrations");
    if (!await migrationCollection.exists()) {
        await migrationCollection.create();
    }
    return
}
