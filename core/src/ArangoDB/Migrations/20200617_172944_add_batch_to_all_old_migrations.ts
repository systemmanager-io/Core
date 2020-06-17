import {arangodb} from "../../connectors";

const migrationCollection = arangodb.collection("migrations")

export async function up() {
    const migrations = await migrationCollection.all();
    const result = await migrations.all();

    for (const data of result) {

        if (data.batch == undefined) {
            await migrationCollection.update(data._id, {batch: 1}).catch((e: any) => console.log(e));
        }

    }
}

export async function down() {
    // Add your down migration here
}
