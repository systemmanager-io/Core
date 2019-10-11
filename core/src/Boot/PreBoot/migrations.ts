import {dbDebug} from "../../Lib/debug";
import * as path from "path";
import * as fs from "fs";
import * as _ from 'lodash'
import checkMigrationCollection from "../../ArangoDB/Functions/checkMigrationCollection";
import {arangodb} from "../../connectors";
import {exist} from "joi";

dbDebug("Checking for migrations");
checkMigrationCollection().then(migrate);

async function migrate() {

    const migrationCollection = arangodb.collection("migrations");
    let newMigrations: boolean = false;

    await getMigrations().map(async migration => {
        //@TODO Check for migration Collection to pu;t the migration data in. {migration: %migrationname%}
        //@TODO Check only for ts/js files. So no other files will be imported.
        const exist = await migrationCollection.documentExists(migration.file);
        if (!exist) {
            const file = require(migration.path);

            if (typeof file.up === 'function') {
                dbDebug("Migrating", migration.file);
                await file.up();
                dbDebug("Migrated", migration.file);
            }
            newMigrations = true;
            await migrationCollection.save({_key: migration.file});
        }
    });
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