import Migration from "../../Lib/Types/ArangoDB/Migration";

export const allowedFileExtensions = /\.(js|ts)$/;
const declarationFiles = /\.d\.ts$/;

export default function migrationFileChecker(migration: Migration) {
    return allowedFileExtensions.test(migration.file) && !declarationFiles.test(migration.file);
}
