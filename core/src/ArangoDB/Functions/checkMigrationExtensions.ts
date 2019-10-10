import Migration from "../../Lib/Types/ArangoDB/Migration";

export const allowedFileExtensions = /\.(ts|js)$/;

export default function migrationAllowed(migration: Migration) {
    return allowedFileExtensions.test(migration.file) && !/\.d\.ts$/.test(migration.file);
}
