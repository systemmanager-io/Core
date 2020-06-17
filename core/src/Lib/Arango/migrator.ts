import {dbDebug} from "../debug";
import * as path from "path";
import * as fs from "fs";
import * as _ from 'lodash'
import checkMigrationCollection from "./Functions/checkMigrationCollection";
import {arangodb} from "../../connectors";
import checkMigrationExtensions from "./Functions/checkMigrationExtensions";
import {getBatch} from "./Functions/getBatch";

export async function migrate() {
    dbDebug("Checking for migrations");
    await checkMigrationCollection();

    // The previous migration run
    let previousBatch = await getBatch();

    // The current migration run
    let currentBatch: number = previousBatch + 1;

    const migrationList = getMigrations();
    for (let index in migrationList) {
        if (migrationList.hasOwnProperty(index)){
            if(await checkMigrationExtensions(migrationList[index])) {
                await migrateToDatabase(migrationList[index], currentBatch)
            } else {
                dbDebug(`Not running this migration ${migrationList[index].file}, Unknown file extension.`)
            }
        }
    }
}

function getMigrations() {
    const dir = path.resolve(__dirname, '../../ArangoDB/Migrations/');
    const dirList = fs.readdirSync(dir)
        .map(fileName => ({
            file: fileName,
            path: path.resolve(dir, fileName),
        }));

    return _.orderBy(dirList, 'file', 'asc');
}

async function migrateToDatabase(migration: Migration, migrationBatch: number) {

    const migrationCollection = arangodb.collection("migrations");

    if (!(await migrationCollection.documentExists(migration.file))) {
        const file = await require(migration.path);

        if (typeof file.up === 'function') {
            dbDebug("Migrating", migration.file);
            await file.up();
            dbDebug("Migrated", migration.file);
        }
        await migrationCollection.save({_key: migration.file, batch: migrationBatch});
    }
}

