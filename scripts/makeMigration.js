const fs = require('fs');
const path = require('path')

;if(!process.argv[2]){
    console.log("No name specified, please add a name for the migration.");
    process.exit(1);

}

const template = `import {arangodb} from "../../connectors";

export async function up() {
    // Add your up migration here
}

export async function down() {
    // Add your down migration here
}
`;

let date = new Date().toISOString().replace(/-|:|\.\d+Z$/g, '');
date = date.replace('T', '_');

const filename = [
    date,
    process.argv[2] + '.ts',
].join('_');

fs.writeFileSync(
    path.resolve(__dirname, '../core/src/ArangoDB/Migrations', filename),
    template,
);
