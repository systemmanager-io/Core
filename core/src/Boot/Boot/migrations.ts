import {dbDebug} from "../../Lib/debug";
import * as path from "path";
import * as fs from "fs";
import * as _ from 'lodash'
import checkMigrationCollection from "../../ArangoDB/Functions/checkMigrationCollection";
import {arangodb} from "../../connectors";
import checkMigrationExtensions from "../../ArangoDB/Functions/checkMigrationExtensions";
import Migration from "../../Lib/Types/ArangoDB/Migration";




export async function migrate() {
    dbDebug("Checking for migrations");
    await checkMigrationCollection();
    const migrationList = getMigrations();

    for (let index in migrationList) {
        if (migrationList.hasOwnProperty(index)) {
            await migrateToDB(migrationList[index])
        }
    }
}

async function migrateToDB(migration: Migration) {
    //@TODO Check only for ts/js files. So no other files will be imported.

    const migrationCollection = arangodb.collection("migrations");

    if (!(await migrationCollection.documentExists(migration.file))) {
        const file = await require(migration.path);
        if (typeof file.up === 'function') {
            dbDebug("Migrating", migration.file);
            await file.up();
            dbDebug("Migrated", migration.file);
        }
        await migrationCollection.save({_key: migration.file});
    }
}


function getMigrations() {
    const dir = path.resolve(__dirname, '../../ArangoDB/Migrations/');
    const dirList = fs.readdirSync(path.resolve(__dirname, '../../ArangoDB/Migrations/'))
        .map(fileName => ({
            file: fileName,
            path: path.resolve(dir, fileName),
        }));

    return _.orderBy(dirList, 'file', 'asc');
}