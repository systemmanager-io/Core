import {aql, AqlQuery} from "arangojs/lib/cjs/aql-query";
import {ArrayCursor} from "arangojs/lib/async/cursor";
import {arangodb} from "../connectors";
import {pingQueue} from "../Boot/Boot/queues";


export default async function (job: any, done: any) {
    const query: AqlQuery = aql`
        FOR u in servers
        RETURN u._key
    `;
    const queryResult: ArrayCursor = await arangodb.query(query);
    const servers = await queryResult.all();
    console.log(servers);

    servers.map((server: any) => {
        pingQueue.add({server})
    });

    done();
};