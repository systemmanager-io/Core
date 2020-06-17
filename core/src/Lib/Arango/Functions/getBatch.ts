import {arangodb} from "../../../connectors";
import {aql} from "arangojs";
import {ArrayCursor} from "arangojs/lib/async/cursor";

export async function getBatch() {

    const query = aql`
        FOR doc IN @@collectionName
        SORT doc._key DESC
        LIMIT @limit
        RETURN doc
    `

    query.bindVars = {
        "@collectionName": "migrations",
        "limit": 1
    };

    const result: ArrayCursor = await arangodb.query(query);
    const batch = await result.all();

    if(batch[0].batch == undefined) return 0;
    return batch[0].batch;

}
