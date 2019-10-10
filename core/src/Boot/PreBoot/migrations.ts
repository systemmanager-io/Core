import {dbDebug} from "../../Lib/debug";
import * as path from "path";
import * as fs from "fs";
import * as _ from 'lodash'

dbDebug("Checking for migrations");

getMigrations().map(migration => {

    //@TODO Check for migration Collection to put the migration data in. {migration: %migrationname%}
    //@TODO Check only for ts/js files. So no other files will be imported.

    const file = require(migration.path);

    if (typeof file.up === 'function') {
        dbDebug("Migrating", migration.file)
        file.up();
        dbDebug("Migrated", migration.file)
    }
});


dbDebug("No new migrations");

function getMigrations() {
    const dir = path.resolve(__dirname, '../../ArangoDB/Migrations/');
    const dirList = fs.readdirSync(path.resolve(__dirname, '../../ArangoDB/Migrations/'))
        .map(fileName => ({
            file: fileName,
            path: path.resolve(dir, fileName),
        }));

    return _.orderBy(dirList, 'file', 'asc');
}